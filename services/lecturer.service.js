const Lecturer = require('../schemas/lecturer.schema');

exports.createLecturer = async (lecturer) => {
    return await Lecturer.create(lecturer);
}

exports.getLecturers = async () => {
    return await Lecturer.find();
}

exports.getLecturerById = async (id
) => {
    return await Lecturer.find({ id: id });
}

exports.updateLecturer = async (id, lecturer) => {
    return await Lecturer.findOneAndUpdate({ id: id }, lecturer, { new: true });
}

exports.deleteLecturers = async (ids) => {
    return await Lecturer.deleteMany({ id: { $in: ids } });
}

