import mongoose, { Date } from 'mongoose';
const Schema = mongoose.Schema;

interface AirQualityDto {
  ts: Date;
  aqius: Number;
  mainus: String;
  aqicn: Number;
  maincn: String;
}

interface AirQualityModel extends mongoose.Model<AirQualityDoc> {
  build(attrs: AirQualityDto): AirQualityDoc;
}

interface AirQualityDoc extends mongoose.Document {
  ts: Date;
  aqius: Number;
  mainus: String;
  aqicn: Number;
  maincn: String;
  createdAt: Date;
  updatedAt: Date;
}

const AirQualitySchema = new Schema({
  ts: {
    type: Date,
  },
  aqius: {
    type: Number,
  },
  mainus: {
    type: String,
  },
  aqicn: {
    type: Number,
  },
  maincn: {
    type: String,
  },

}, {
  timestamps: true
});

AirQualitySchema.statics.build = (attrs: AirQualityDto) => {
  return new AirQuality(attrs)
}

const AirQuality = mongoose.model<AirQualityDoc, AirQualityModel>("AirQuality", AirQualitySchema);
export { AirQuality, AirQualityDoc, AirQualityDto }
