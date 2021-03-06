var winscale = d3.scaleLinear()
  .domain([0, 50,100])
  .range(["white", "#0091FF", "#002E66"]);
var delscale = d3.scaleLinear()
  .domain([0, 1990])
  .range(["white", "#002E66"]);  



d3.csv("topline.csv", function (error, data) {

  


  var svg = d3.select("#topline").append("svg")
    .attr("viewBox", "0 0 1000 430")
    .append('g')

  
svg.append("rect")
.attr("width",500)
.attr("height",500)
.attr("fill","white")

  var svgrepeat = svg.append('g')
    .attr('class', 'grepeat')
    .attr("transform", "translate(" + 0 + "," + 90 + ")")



  var repeat = svgrepeat.selectAll('.repeat')
    .data(data)
    .enter().append('g')
    .attr("class", "repeat")
    .attr("transform", function (d, i) { return "translate(0," + i * 40 + ")" })


    repeat.append("rect")
    .attr("x",680)
    .attr("y",-25)
    .attr("width",100)
    .attr("height",40)
    .attr("fill",d=> winscale(d.win))

    repeat.append("rect")
    .attr("x",780)
    .attr("y",-25)
    .attr("width",100)
    .attr("height",40)
    .attr("fill",d=> delscale(d.delegates))

    repeat.append("rect")
    .attr("x",880)
    .attr("y",-25)
    .attr("width",100)
    .attr("height",40)
    .attr("fill",d=> winscale(d.voteShare))

  repeat.append("text")
    .attr("class", "repeat-text")
    .attr("x", 20)
    .attr("y", 0)
    .style("fill", "Black")
    .style("font-size", 20)
    .attr("font-weight", 500)
    .text(d => d.category)
    .attr("text-anchor", "start")

    repeat.append("text")
    .attr("class", "repeat-text")
    .attr("x", 775)
    .attr("y", 0)
    .style("fill", "Black")
    .style("font-size", 20)
    .attr("font-weight", 500)
    .text(d => d.win+"%")
    .attr("text-anchor", "end")

    repeat.append("text")
    .attr("class", "repeat-text")
    .attr("x", 875)
    .attr("y", 0)
    .style("fill", d => d.delegates > 1500? "white":"black")
    .style("font-size", 20)
    .attr("font-weight", 500)
    .text(d => d.delegates)
    .attr("text-anchor", "end")


    repeat.append("text")
    .attr("class", "repeat-text")
    .attr("x", 975)
    .attr("y", 0)
    .style("fill", "Black")
    .style("font-size", 20)
    .attr("font-weight", 500)
    .text(d => d.voteShare+"%")
    .attr("text-anchor", "end")
    
    repeat.append("line")
    .attr("x1",10)
    .attr("x2",990)
    .attr("y1",-25)
    .attr("y2",-25)
    .attr("stroke","#e1e5e8")
    .attr("stroke-width",1)

    svg.append("text")
    .attr("x",20)
    .attr("y",55)
    .style("fill", "Black")
    .style("font-size", 25)
    .attr("font-weight",700)
    .text("Candidate")

    svg.append("text")
    .attr("x",830)
    .attr("y",55)
    .style("fill", "Black")
    .style("font-size", 20)
    .attr("font-weight",700)
    .attr("text-anchor","end")
    .text("Delegates")
    .attr("text-anchor","middle")

    svg.append("text")
    .attr("x",930)
    .attr("y",55)
    .style("fill", "Black")
    .style("font-size", 20)
    .attr("font-weight",700)
    .attr("text-anchor","end")
    .text("Vote Share")
    .attr("text-anchor","middle")

    svg.append("text")
    .attr("x",730)
    .attr("y",30)
    .style("fill", "Black")
    .style("font-size", 20)
    .attr("font-weight",700)
    .attr("text-anchor","end")
    .attr("text-anchor","middle")
    .text("Win")
    
    svg.append("text")
    .attr("x",730)
    .attr("y",55)
    .style("fill", "Black")
    .style("font-size", 20)
    .attr("font-weight",700)
    .attr("text-anchor","middle")
    .text("Nomination")

    svg.append("line")
    .attr("x1",10)
    .attr("x2",980)
    .attr("y1",65)
    .attr("y2",65)
    .attr("stroke","black")
    .attr("stroke-width",3)
})