import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (
  req,
  res
) => {
  try {
    const {
      name,
      phone,
      email,
      productInterest,
      message,
    } = req.body;

    const inquiry = await Inquiry.create({
      name,
      phone,
      email,
      productInterest,
      message,
    });

    res.status(201).json(inquiry);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getInquiries = async (
  req,
  res
) => {
  try {
    const inquiries =
      await Inquiry.find().sort({
        createdAt: -1,
      });

    res.json(inquiries);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};