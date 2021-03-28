import Table from 'react-bootstrap/Table';
import Link from 'next/link';

const MonthlyMenu = ({
  name,
  desc,
  price,
  orderLink,
  week1Menu,
  week2Menu,
  week3Menu,
  week4Menu,
}) => {
  let weekDays;

  if ((week1Menu, week2Menu, week3Menu, week4Menu)) {
    weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  } else {
    weekDays = [];
  }

  return (
    <div className='monthly-menu text-center' style={{ marginBottom: '84px' }}>
      <h2 className='name mb-1'>{name}</h2>
      <p className='desc mb-2'>{desc}</p>
      <h4 className='price'>{price}</h4>
      <Table className='mt-4 mb-1 bg-white text-left' striped>
        <thead style={{ backgroundColor: '#20c400', color: '#fff' }}>
          <tr>
            <th style={{ width: '14%' }}>Day</th>
            <th style={{ width: '40%' }}>Week 1</th>
            <th>Week 2</th>
          </tr>
        </thead>
        <tbody>
          {weekDays.map((day, index) => (
            <tr key={index}>
              <td>{day}</td>
              <td>{week1Menu[index]}</td>
              <td>{week2Menu[index]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table className='mb-4 bg-white text-left' striped>
        <thead style={{ backgroundColor: '#20c400', color: '#fff' }}>
          <tr>
            <th style={{ width: '14%' }}>Day</th>
            <th style={{ width: '40%' }}>Week 3</th>
            <th>Week 4</th>
          </tr>
        </thead>
        <tbody>
          {weekDays.map((day, index) => (
            <tr key={index}>
              <td>{day}</td>
              <td>{week3Menu[index]}</td>
              <td>{week4Menu[index]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link href={orderLink}>
        <a className='cta-btn cta-lg cta-btn-primary'>Order Now</a>
      </Link>
    </div>
  );
};

MonthlyMenu.defaultProps = {
  name: 'Menu Name',
  desc: 'Menu Description',
  price: 'Menu Price',
};

export default MonthlyMenu;
