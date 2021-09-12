const initial = {
  isLoading: false,
  activeSort: 'САМЫЙ ДЕШЕВЫЙ',
  transfers: [
    {name: 'Все', checked: false},
    {name: 'Без пересадок', checked: true, stops: 0},
    {name: '1 пересадка', checked: true, stops: 1},
    {name: '2 пересадки', checked: false, stops: 2},
    {name: '3 пересадки', checked: false, stops: 3},
  ],
  sorts: [
    {name: 'САМЫЙ ДЕШЕВЫЙ', active: true},
    {name: 'САМЫЙ БЫСТРЫЙ', active: false},
    {name: 'ОПТИМАЛЬНЫЙ', active: false}
  ],
  tickets: [],
}


export default initial;