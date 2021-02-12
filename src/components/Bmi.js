import React from 'react'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
// import BMI_I from './BMI_I';
import '../App.css';
const overWeight=['Ensure a Sufficient Intake of B Vitamins','Be Sure to Get Enough Vitamin D to Reduce Fat Accumulation in Winter',
' Consume Catechins to Boost Fat Burning',' Eat Plenty of Foods Rich in Vitamin C','Consume Iodine-Rich Foods to Prevent Sluggish Thyroid Activity']
const underWeight=['Choose nutrient-rich foods.','Try smoothies and shakes.','Have an occasional treat.','Eat more frequently, When you\'re underweight, you may feel full faster. Eat five to six smaller meals during the day rather than two or three large meals.'];
const obesity=['Talk to professional trainer','Do exercise','Do Activities like skipping and play outdoor games','Intermitent fasting'];
const normalweight=['Your weight is normal but try to maintain it by doing exercise and eating healthy food'];

const Bmi = () => {
    const {register,handleSubmit,errors}=useForm();
    
      
    const onSubmit=(data)=>
    {
        const val=0.3048*0.3048;
        const weightM=(data.weight)/(val*data.height*data.height);
        if(weightM<=18.5){
            let output='';
            underWeight.forEach(x=>
                {
                    output+=
                    `<div class="card" style="width: 18rem">
                    <div class="card-body">
                      <h5 class="card-title">UnderWeight</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${x}</h6>
                      <a href="#" class="card-link">Card link</a>
                    </div>
                  </div>`
                })
        document.querySelector('.Bmi_form').innerHTML=output;
        }
        else if(weightM<=24.5)
        {
            let output='';
            normalweight.forEach(x=>
                {
                    output+=`
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">NormalWeight</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${x}</h6>
                      <a href="#" class="card-link">Card link</a>
                    </div>
                  </div>`
                })
        document.querySelector('.Bmi_form').innerHTML=output;
        }
        else if(weightM<=30)
        {
            let output='';
            overWeight.forEach(x=>
                {
                    output+=
                    `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">OverWeight</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${x}</h6>
                      <a href="#" class="card-link">Card link</a>
                    </div>
                  </div>`
                })
        document.querySelector('.Bmi_form').innerHTML=output;
        }
        else{
            let output='';
            obesity.forEach(x=>
                {
                    output+=
                    `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Obesity</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${x}</h6>
                      <a href="#" class="card-link">Card link</a>
                    </div>
                  </div>`
                })
        document.querySelector('.Bmi_form').innerHTML=output;
        }

    }
    return (
        <div>
        <form className="Bmi_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="Bmi_child">
            <label>Enter Weight in Kg</label>
            <input type="number" name="weight" ref={register({required:'Please Enter all details'})}></input>
            </div> 
            <div className="Bmi_child">
            <label>Enter height in feet</label>
            <input type="number" name="height" ref={register({required:'Please Enter all details'})}></input>
            </div>
            {errors.password && <p>{errors.password.message}</p>}
            <div className="Bmi_child" >
                <input type="submit"></input>
            </div> 
        </form>
        </div>
    )
}

export default Bmi

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
