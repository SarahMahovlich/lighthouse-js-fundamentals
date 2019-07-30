function calculateRectangleArea(length, width) {
  if ((length * width) <= 0) {
    return undefined;
  } else {
    return length * width;
  }
}

function calculateTriangleArea(base, height){
  if (((base * height) / 2) <= 0) {
    return undefined;
  } else {
    return ((base * height) / 2);
  }
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    return (Math.PI * (radius * radius)); 
  } 
}