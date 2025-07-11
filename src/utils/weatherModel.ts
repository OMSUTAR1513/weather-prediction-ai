import * as tmImage from "@teachablemachine/image";

const modelURL = "/model/model.json";
const metadataURL = "/model/metadata.json";

let model: tmImage.CustomMobileNet | null = null;

export const loadModel = async () => {
  if (!model) {
    model = await tmImage.load(modelURL, metadataURL);
  }
  return model;
};

export const predictWeather = async (imageElement: HTMLImageElement) => {
  const loadedModel = await loadModel();
  const predictions = await loadedModel.predict(imageElement);
  const topPrediction = predictions.reduce((max, pred) =>
    pred.probability > max.probability ? pred : max
  );

  return {
    className: topPrediction.className,
    probability: topPrediction.probability,
    predictions: predictions.sort((a, b) => b.probability - a.probability),
  };
};
