import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component{
    state = {
        calanderFocused: null,
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calanderFocused) => {
        this.setState(() => ({ calanderFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortByChange = (e) => {
        if (e.target.value === 'date') {
            return this.props.sortByDate();
        }
        return this.props.sortByAmount();
    }

    render(){
        return  (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange} 
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}
                >
                   <option value="date">Date</option>
                   <option value="amount">Amount</option>
               </select>
               <DateRangePicker
                  startDate={this.props.filters.startDate}
                  endDate={this.props.filters.endDate}
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calanderFocused}
                  onFocusChange={this.onFocusChange}
                  showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
               />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    filters: state.filters
})

const mapDispatchToProps = dispatch => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);