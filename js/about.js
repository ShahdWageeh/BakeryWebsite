const counterSection = document.getElementById('counter')
const pageLikes = document.getElementById('pageLikes')
const locations = document.getElementById('locations')
const greatIdeas = document.getElementById('greatIdeas')
const comments = document.getElementById('comments')

let hasStarted = false
function isVisible(section){
    const visible = section.getBoundingClientRect()
    return visible.top >= 0 && visible.bottom <= window.innerHeight
}
function startCounter(element, targetNo, endTime){
    const counterElement = element
    const targetNumber = targetNo
    let currentCount = 0 
    const interval = setInterval(()=>{
        if(currentCount < targetNumber){
            currentCount++
            counterElement.textContent = currentCount;
        }else{
            clearInterval(interval)
        }
    },endTime)
}
window.addEventListener('scroll', function(){
    if(isVisible(counterSection) && !hasStarted){
        hasStarted = true
        startCounter(pageLikes, 1430,1)
        startCounter(locations, 64,90)
        startCounter(greatIdeas, 960, 6)
        startCounter(comments, 420,13)
    }
})