const form = document.querySelector('form')

// this usecase will give you empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    const weightGuide = document.querySelector('#weightGuide')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
    
        results.innerHTML = `<span>${bmi}</span>`

        if(bmi <= 18.6){
            weightGuide.innerHTML = `According to your BMI ,i.e ${bmi}, you're Under Weight`
        }
        else if(bmi > 18.6 || bmi <= 24.9){
            weightGuide.innerHTML = `According to your BMI ,i.e ${bmi}, you're Normal Weight`
        }
        else{
            weightGuide.innerHTML = `According to your BMI ,i.e ${bmi}, you're you're Over Weight`
        }
    }
    
})