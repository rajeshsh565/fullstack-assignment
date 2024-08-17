import Card from "../Models/CardModel.js";

export const createCard = async (req, res) => {
  const { title, description } = req.body;
  const card = await Card.create({ title, description });
  res.status(201).json({ msg: "Card Successfully Created!", newCard: card });
};

export const getAllCards = async (req, res) => {
  const cards = await Card.find({});
  res.status(200).json({ cards });
};

export const getSingleCard = async (req, res) => {
  const { title } = req.params;
//   const cardRegex = new RegExp(title, "i");
//   const card = await Card.find({ title: { $regex: cardRegex } });   for partial search of the card.
  const card = await Card.findOne({ title });
  if(!card)
    return res.status(404).json({msg:`Help card not found!`})
  res.status(200).json({ card });
};
