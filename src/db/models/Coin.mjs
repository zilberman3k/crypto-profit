import mongoose from 'mongoose';
const { Schema } = mongoose;
const { String } = Schema.Types;
const coinSchema = new Schema({
	asset_id: { type: String },
	name: { type: String },
});

coinSchema.index({ '$**': 'text' });

export default mongoose.model('Coin', coinSchema);
