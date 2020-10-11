const btnPlusOne = $('.btn-plusone');
const btnPlusThree = $('.btn-plusthree');
const btnPlusSeven = $('.btn-plusseven');
let currentProgressbarValue = +/\d+/.exec($('.progress-bar').attr("style"));
     
btnPlusOne.click(function() {
  if (currentProgressbarValue < 100) {
      $('.progress-bar').attr("style", "width: " + (currentProgressbarValue + 1) + "%");
      currentProgressbarValue = currentProgressbarValue + 1;
  }
  else {
  alert('Прогрессбар заполнен на '+currentProgressbarValue+' из 100, харэ тыкать, Геракл!');
  }
});

btnPlusThree.click(function() {
  if (currentProgressbarValue < 98) {
      $('.progress-bar').attr("style", "width: " + (currentProgressbarValue + 3) + "%");
      currentProgressbarValue = currentProgressbarValue + 3;
  }
  else {
  alert('Прогрессбар заполнен на '+currentProgressbarValue+' из 100, братан, притормози, куда разогнался то');
  }
});

btnPlusSeven.click(function() {
  if (currentProgressbarValue < 94) {
      $('.progress-bar').attr("style", "width: " + (currentProgressbarValue + 7) + "%");
      currentProgressbarValue = currentProgressbarValue + 7;
  }
  else {
  alert('Прогрессбар заполнен на '+currentProgressbarValue+' из 100, может хватит?');
  }
});
