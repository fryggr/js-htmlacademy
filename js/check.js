function getMessage(a, b) {
  if ((typeof a)=="boolean") {
    if (a) {
      return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
    }
    else {
      return "Переданное GIF-изображение не анимировано";
    }
  }
  if ((typeof a)=="number")
  {
    return "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " аттрибутов";
  }
  if ((typeof a)=="object")
  {
    var sum = 0;
    for (var i=0; i<a.length; i++)
    {
      sum = sum + a[i];
    }
    return "Количество красных точек во всех строчках изображения: " + sum;
  }
  if (((typeof a)=="object")&&((typeof b)=="object"))
  {
    var square = 0;
    for (var k=0; k<a.length; k++)
      {
        for (var j=0; j<b.length; j++)
        {
          square = square + a[k]*b[j];
        }
      }
    return "Общая площадь артефактов сжатия: " + square + " пикселей";
  }
}
