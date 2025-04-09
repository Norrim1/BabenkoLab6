let first_angular_point = prompt('X первой вершины квадрата =', 3);
let second_angular_point = prompt('Y второй вершины квадрата =', 3);

let x_point = prompt('X точки =', 3);
let y_point = prompt('Y точки =', 3);
if((first_angular_point * -1) < x_point & x_point < first_angular_point & (second_angular_point * -1) < y_point & y_point < second_angular_point)
        {alert('Точка принадлежит созданному квадрату')}
        else{alert('Точка не принадлежит созданному квадрату')}