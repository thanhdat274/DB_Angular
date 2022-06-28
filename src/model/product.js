import mongoose, { ObjectId } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default:0
    },
    sale_price: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default:0
    },
    img: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    categoryId: {
        type: ObjectId,
        ref: 'Category'
    }
}, { timestamps: true });
export default mongoose.model('Product', ProductSchema)