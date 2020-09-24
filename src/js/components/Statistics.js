export class Statistics {
  constructor(page, parsed) {
      this.page = page;
    this.parsed = parsed;
    this.date = new Date();
    this.start = 0;
    this.end = 7;
    this.chartLineTemplate = page.querySelector("#chart-line").content;
    this.containerCalendar = page.querySelector('.diagram__calendar');
    this.containerCharts = page.querySelector('.diagram__chart');
    this.renderDays(); 
    this.sortByDate();
    
    

    
    
    
   
    
   
  }

  times = (str) => {
    const time = new Date(str);
    const numberDay = new Intl.DateTimeFormat("ru-Ru", {
      day: "numeric",
    }).format(time);
    const weekDay = new Intl.DateTimeFormat("ru-Ru", {
      weekday: "short",
    }).format(time);

    return `${numberDay}, ${weekDay}`;
  };

  getLastWeek = () => {
    const today = new Date();
    const dayAgo = new Date();
    const daysArr = [];
    for (let i = 0; i <= 6; i++) {
      daysArr[i] = this.times(dayAgo.setDate(today.getDate() - i));
      
    }

    return daysArr.reverse();
  };

  renderDays = () => {
    const days = this.getLastWeek();
    days.forEach((item) => {
      let date = document.createElement("li");
      date.classList.add('diagram__date');
      date.textContent = item;
      this.containerCalendar.append(date);
    });
  }


    sortByDate = () => {
        const days = this.getLastWeek();
       
        
        for(let i=0; i<days.length; i++) {
            let arrDay = [];
            for(let c=0; c<this.parsed.length; c++) {
                
                if(this.times(this.parsed[c].publishedAt) == days[i]) {
                    arrDay.push(this.parsed[c])
                    
                }
                
            }
            
            this.checkArray(arrDay);
        }
       
    }

    checkArray = (arr) => {
        const searchValue = localStorage.getItem('query').toLowerCase();
        const ar = []
        arr.forEach(item => {
            ar.push(item.title);
            ar.push(item.description);
        })
        const newAr = ar.join().toLowerCase().split(' ');
        this.sum = 0;
        for (let i = 0; i <= newAr.length; i++) {
            if (newAr[i] == searchValue) {
                this.sum += 1;
            }
        }
       
        console.log(this.renderDiagram(this.sum));
    }

    renderDiagram = (sum) => {
        this.chartLine = this.chartLineTemplate.cloneNode(true);
        this.chartLine.querySelector('.diagram__chart-line').textContent = sum;
        this.chartLine.querySelector('.diagram__chart-line').style.width = `${sum}%`;
        this.containerCharts.append(this.chartLine);
        
  
  }
}
  

 


