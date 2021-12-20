const { Sequelize, Model, STRING, ENUM } = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/blogs', { logging: false });

class Blog extends Model{};
Blog.init({
  title: {
    type: STRING,
  },
  topic: {
    type: ENUM,
    values: ['Business', 'Psychology', 'Productivity', 'Technology']
  },
  content: {
    type: STRING(10000),
  }
}, { sequelize: db, modelName: 'blogs' });

class Blogger extends Model{};
Blogger.init({
  firstName: {
    type: STRING,
  },
  lastName: {
    type: STRING,
  }
}, { sequelize: db, modelName: 'bloggers' });

Blog.belongsTo(Blogger); //bloggerId to blog
Blogger.hasMany(Blog);

const syncAndSeed = async() => {
  await db.sync({ force: true });
  const blog1 = await Blog.create({
    title: '8 Things Every Person Should Do Before 8 A.M.',
    topic: 'Productivity',
    content: "Lorem ipsum dolor sit amet. Est laborum mollitia sed provident saepe et dignissimos officiis in debitis sint cum cupiditate explicabo! Et nulla voluptas eum aspernatur internos aut debitis perspiciatis. Et facilis voluptatem aut dolore perferendis ut voluptatibus tempora At omnis sint quo exercitationem sunt a dolorum atque 33 cumque repudiandae. Id consequatur quia ea aliquid dolorem sit tempore vitae eos provident placeat."
  });
  const blog2 = await Blog.create({
    title: '6 Ways to Make Passive Income to Achieve Financial Independence',
    topic: 'Business',
    content: "Lorem ipsum dolor sit amet. Est laborum mollitia sed provident saepe et dignissimos officiis in debitis sint cum cupiditate explicabo! Et nulla voluptas eum aspernatur internos aut debitis perspiciatis. Et facilis voluptatem aut dolore perferendis ut voluptatibus tempora At omnis sint quo exercitationem sunt a dolorum atque 33 cumque repudiandae. Id consequatur quia ea aliquid dolorem sit tempore vitae eos provident placeat."
  });
  const blog3 = await Blog.create({
    title: "Why You’re Attracted To Emotionally Unavailable Partners",
    topic: 'Psychology',
    content: "Lorem ipsum dolor sit amet. Est laborum mollitia sed provident saepe et dignissimos officiis in debitis sint cum cupiditate explicabo! Et nulla voluptas eum aspernatur internos aut debitis perspiciatis. Et facilis voluptatem aut dolore perferendis ut voluptatibus tempora At omnis sint quo exercitationem sunt a dolorum atque 33 cumque repudiandae. Id consequatur quia ea aliquid dolorem sit tempore vitae eos provident placeat."
  })
  const blogger1 = await Blogger.create({
    firstName: 'Benjamin',
    lastName: 'Hardy'
  });
  const blogger2 = await Blogger.create({
    firstName: 'Diana',
    lastName: 'Meresc'
  });
  blog1.update({
    bloggerId: blogger1.id
  });
  blog2.update({
    bloggerId: blogger2.id
  });
  blog3.update({
    bloggerId: blogger1.id
  })
}

module.exports = {
  db,
  models: { Blog, Blogger },
  syncAndSeed
};
