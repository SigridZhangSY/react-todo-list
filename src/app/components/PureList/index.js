import React, { PureComponent } from 'react';

export const PureList = (props) => {
    const { list } = props;


    return (
        <div>
            {list.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    );
};


export class CustomerListItem extends PureComponent {
    render() {
        const { title } = this.props

        return (
            <div>{title}</div>
        )
    }
}

// export const CustomerListItem = (props) => (
//     (<div>{title}</div>)
// );
