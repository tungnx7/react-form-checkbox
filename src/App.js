import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {
  const [checked, setChecked] = useState([]); //Để có nhiều lựa chọn cần đưa các giá trị vào trong mảng

  console.log(checked);

  const handleCheck = (id) => {   
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) { //khi các lựa chọn đã tích hết
        return checked.filter(item =>item !== id) //lọc các giá trị trùng với id đã chọn
      } else { //khi chưa tích hết các lựa chọn
        return [...prev, id] //Sử dung spread để lưu lại các giá trị đã chọn và khi chọn các giá trị mới thì add thêm id
      }
    })
  }

  return (
    <div style={{ padding: 200}}>
      {courses.map(course => (
        <div>
          <input key={course.id}
            type= 'checkbox'
            checked={checked.includes(course.id)} //Khớp các giá trị id trong mảng
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

    </div>
  );
}

export default App;
