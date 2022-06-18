import classnames from 'classnames';

import styles from './style.module.scss';
import { Typography } from '@material-ui/core';
import { FOOD_TYPE, FOODS } from '../../constant/food';

import { formatCurrency } from '../../ultil/format';
import { useEffect, useState } from 'react';

const Row = ({ label, content, id, onUpdate }) => {
  const handleChange = (e) => {
    onUpdate(e);
  };
  return (
    <div className={styles.row}>
      <input type='checkbox' value={id} onChange={handleChange}></input>
      <div className={styles.label}>{label}</div>
      <div className={classnames(styles.content)}>{content}</div>
    </div>
  );
};
const OrderBlock = ({ data, onUpdate }) => {
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <div className={styles.orderForm} key={index}>
              <div className={styles.title}>
                <Typography variant='h5'>{item.title}</Typography>
              </div>
              {FOODS.map((food, index) => {
                return (
                  food.type == item.id && (
                    <Row
                      key={index}
                      id={food.id}
                      label={food.title}
                      content={formatCurrency(food.price)}
                      onUpdate={onUpdate}
                    />
                  )
                );
              })}
            </div>
          );
        })}
    </>
  );
};
export default () => {
  const [foods, setFoods]: any = useState([]);

  const onUpdate = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setFoods([...foods, value]);
    } else {
      setFoods(() => foods.filter((item) => item !== value));
    }
  };
  useEffect(() => {
    console.log(foods);
  }, [foods]);
  return (
    <div className={styles.container}>
      <OrderBlock data={FOOD_TYPE} onUpdate={onUpdate} />
    </div>
  );
};
