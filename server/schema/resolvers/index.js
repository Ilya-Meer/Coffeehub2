const { Author, Coffeeshop, Comment } = require("../../models");

const singleCommentResolver = async ({ _id }) => {
  try {
    const comment = await Comment.findById(_id);
    return comment;
  } catch (err) {
    console.log(err);
  }
};

const singleCoffeeshopResolver = async ({ _id }) => {
  try {
    const coffeeshop = await Coffeeshop.findById(_id).populate("author");
    return coffeeshop;
  } catch (err) {
    console.log(err);
  }
};

const coffeeshopsResolver = async () => {
  try {
    const coffeeshops = await Coffeeshop.find().populate({
      path: "author comments",
      populate: {
        path: "author"
      }
    });
    return coffeeshops;
  } catch (err) {
    console.log(err);
  }
};

const commentsResolver = async () => {
  try {
    const comments = await Comment.find().populate("author");
    return comments;
  } catch (err) {
    console.log(err);
  }
};

const createCommentResolver = async ({ commentInput }) => {
  let commentInfo = {
    text: commentInput.text,
    coffeeshopID: commentInput.coffeeshopID
  };

  const coffeeshop = await Coffeeshop.findOne({
    _id: commentInfo.coffeeshopID
  });

  try {
    const existingAuthor = await Author.findOne({
      fbid: commentInput.author.fbid
    });
    if (existingAuthor) {
      const comment = new Comment({
        ...commentInfo,
        author: existingAuthor.id
      });
      return comment
        .save()
        .then(async result => {
          await Promise.all([
            coffeeshop.comments.push(comment),
            coffeeshop.save()
          ]);

          return result;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    }

    const newAuthor = new Author({
      fbid: commentInput.author.fbid,
      displayName: commentInput.author.displayName
    });
    const saved = await newAuthor.save();
    const comment = new Comment({
      ...commentInfo,
      author: saved.id
    });

    try {
      const result = await comment.save();
      await coffeeshop.comments.push(comment);

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createCoffeeshopResolver = async ({ coffeeshopInput }) => {
  let coffeeshopInfo = {
    name: coffeeshopInput.name,
    image: coffeeshopInput.image,
    description: coffeeshopInput.description,
    pros: coffeeshopInput.pros,
    cons: coffeeshopInput.cons
  };

  try {
    const existingAuthor = await Author.findOne({
      fbid: coffeeshopInput.author.fbid
    });
    if (existingAuthor) {
      const coffeeshop = new Coffeeshop({
        ...coffeeshopInfo,
        author: existingAuthor.id
      });
      return coffeeshop
        .save()
        .then(result => {
          return result;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    }
    const newAuthor = new Author({
      fbid: coffeeshopInput.author.fbid,
      displayName: coffeeshopInput.author.displayName
    });

    const saved = await newAuthor.save();
    const coffeeshop = new Coffeeshop({
      ...coffeeshopInfo,
      author: saved.id
    });
    try {
      const result = await coffeeshop.save();
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  singleCommentResolver,
  commentsResolver,
  singleCoffeeshopResolver,
  coffeeshopsResolver,
  createCoffeeshopResolver,
  createCommentResolver
};
