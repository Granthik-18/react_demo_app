import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='title'>
                <h2>{props.title}</h2>
                <div className='expense'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;