let cent = [59.93749, 30.32245];

function init() {
  let map = new ymaps.Map('map', {
    center: cent,
    zoom: 16,
  });

  let placemark = new ymaps.Placemark(cent, {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/sprite/mark-icon.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-5, -20],
  });

  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

export {init};
