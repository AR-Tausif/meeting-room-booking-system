import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./bookings.service";

const createBookingIntoDB = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingsIntoDB({
    room: req.body.room,
    slots: req.body.slots,
    date: req.body.date,
    user: req.user.userId,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking created successfully",
    data: result,
  });
});
const getAllBookingsFromDB = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

export const BookingControllers = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
