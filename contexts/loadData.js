import axios from "axios";

export async function dataLoader(url, parameter) {
  const response = await axios.get(url);
  return response.data.properties.parameter[parameter];
}

export const dailyDataFormatter = (rawData, labelCount = 5) => {
  let values = [];
  let allLabels = [];

  for (const key in rawData) {
    values.push(rawData[key]);

    const year = key.slice(0, 4);
    const month = key.slice(4, 6);
    const day = key.slice(6, 8);
    allLabels.push(`${day}/${month}/${year}`);
  }

  const selectedLabels = [];
  for (let i = 0; i < labelCount; i++) {
    const select = Math.floor((allLabels.length / (labelCount-1)) * i);
    if (select >= allLabels.length) select--;
    selectedLabels.push(allLabels[select]);
  }

  return {
    values: values,
    selectedLabels: selectedLabels,
  }
};

export const monthlyDataFormatter = (rawData, labelCount = 5) => {
  let values = [];
  let allLabels = [];

  for (const key in rawData) {
    values.push(rawData[key]);

    const year = key.slice(0, 4);
    const month = key.slice(4, 6);

    if (month==='01') month="Jan"
    if (month==='02') month="Feb"
    if (month==='03') month="Mar"
    if (month==='04') month="Apr"
    if (month==='05') month="May"
    if (month==='06') month="Jun"
    if (month==='07') month="Jul"
    if (month==='08') month="Aug"
    if (month==='09') month="Sep"
    if (month==='10') month="Oct"
    if (month==='11') month="Nov"
    if (month==='12') month="Dec"
    if (month==='13') month="Ann"

    allLabels.push(`${month} ${year}`);
  }

  const selectedLabels = [];
  for (let i = 0; i < labelCount; i++) {
    const select = Math.floor((allLabels.length / (labelCount-1)) * i);
    if (select >= allLabels.length) select--;
selectedLabels.push(allLabels[select]);
  }

  return {
    values: values,
    selectedLabels: selectedLabels,
  }
};

export const yearlyDataFormatter = (rawData, labelCount = 5) => {
  let values = [];
  let allLabels = [];

  for (const key in rawData) {
    values.push(rawData[key]);

    const year = key.slice(0, 4);
    allLabels.push(`${year}`);
  }

  const selectedLabels = [];
  for (let i = 0; i < labelCount; i++) {
    const select = Math.floor((allLabels.length / (labelCount-1)) * i);
    if (select >= allLabels.length) select--;
    selectedLabels.push(allLabels[select]);
  }

  return {
    values: values,
    selectedLabels: selectedLabels,
  }
};
