import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const[DUMMY_MEALS,setDUMMY_MEALS]=useState([])
  const [isLoading,setIsLoading]=useState(true);
  const [hasError,setHasError]=useState(false)
  useEffect(()=>{
    const fetchMeals=async()=>{
      const response= await fetch("https://react-http-b91fc-default-rtdb.firebaseio.com/meals.json");

      if(!response.ok){
        throw new Error("Somethig went wrong!")
      }

      const data=await response.json();
      const loademeals=[]

      for(const key in data){
        loademeals.push({
          id:key,
          name:data[key].name,
          description:data[key].description,
          price:data[key].price
        })
      }

      setDUMMY_MEALS(loademeals)
      setIsLoading(false)
    }
      fetchMeals().catch(err=>{
        setIsLoading(false);
        setHasError(err.message)
      })
  },[])

  if(hasError){
    return <section className={classes.MealsError}>
      <p>{hasError}</p>
    </section>
  }

  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        {isLoading&&<p>loading.....</p>}
       {!isLoading&&<ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};
export default AvailableMeals;
