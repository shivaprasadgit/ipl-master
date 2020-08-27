import React, { Component } from 'react'
import './SchedulerCalender.scss'
export default class SchedulerCalender extends Component {
    render() {
        return (
          
            <div className="contentbox">
            <h1 className="heading">Scheduler Calender</h1>
                <div class="calendar-container">
    <div class="calendar-header">
    <h1 id="SchedulerCalender">August<button>▾</button></h1>        
    <p>2020</p>
    </div>
    <div class="calendar"><span class="day-name">Mon</span><span class="day-name">Tue</span><span class="day-name">Wed</span><span class="day-name">Thu</span><span class="day-name">Fri</span><span class="day-name">Sat</span><span class="day-name">Sun</span>
        <div class="day day--disabled">30</div>
        <div class="day day--disabled">31</div>
        <div class="day">1</div>
        <div class="day">2</div>
        <div class="day">3</div>
        <div class="day">4</div>
        <div class="day">5</div>
        <div class="day">6</div>
        <div class="day">7</div>
        <div class="day">8</div>
        <div class="day">9</div>
        <div class="day">10</div>
        <div class="day">11</div>
        <div class="day">12</div>
        <div class="day">13</div>
        <div class="day">14</div>
        <div class="day">15</div>
        <div class="day">16</div>
        <div class="day">17</div>
        <div class="day">18</div>
        <div class="day">19</div>
        <div class="day">20</div>
        <div class="day">21</div>
        <div class="day">22</div>
        <div class="day">23</div>
        <div class="day">24</div>
        <div class="day">25</div>
        <div class="day">26</div>
        <div class="day">27</div>
        <div class="day">28</div>
        <div class="day">29</div>
        <div class="day">30</div>
        <div class="day">31</div>
        <div class="day day--disabled">1</div>
        <div class="day day--disabled">2</div>
        <section class="task task--warning">RCB VS MI</section>
        <section class="task task--danger">CHK VS SRH</section>
        <section class="task task--primary">
            <div class="task__detail">KKR VS RR
                <h2>Product Checkup 1</h2>
                <p>15-17th November</p>
            </div>
        </section>
        <section class="task task--info">
        <div class="task__detail">KKR VS RR
                <h2>Product Checkup 1</h2>
                <p>15-17th November</p>
            </div></section>
    </div>
</div>
            </div>
        )
    }
}
