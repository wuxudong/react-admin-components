import React, {Component} from 'react';

import {Field} from 'redux-form'

class CategorySelector extends Component {
    state = {
        l1Options: [],
        l2Options: [],
        l3Options: [],

        l1Value: null,
        l2Value: null,
        categoryId: null,
    }

    componentDidMount() {
        const {categories} = this.props

        this.setState({l1Options: categories, l2Options:[], l3Options:[]})

    }

    handleL1Change(event, newValue) {
        const result = this.state.l1Options.find(c => `${c.name}` == newValue);
        this.setState({...this.state, l2Options: result ? result.sub : [], l3Options: [], });
    }

    handleL2Change(event, newValue) {
        const result = this.state.l2Options.find(c => `${c.name}` == newValue);
        this.setState({...this.state, l3Options: result ? result.sub : [], });
    }

    render() {
        const {l1Options, l2Options, l3Options} = this.state;
        return (<div>
            <Field
                name="l1"
                label={'1级分类'}
                placeholder="选择1级分类"
                component="select"
                onChange={this.handleL1Change.bind(this)}
            >
                <option value={null}></option>
                {l1Options.map(o => (<option value={o.name}>{o.name}</option>))}

            </Field>

            <Field
                name="l2"
                label={'2级分类'}
                placeholder="选择2级分类"
                component="select"
                onChange={this.handleL2Change.bind(this)}
            >
                <option value={null}></option>
                {l2Options.map(o => (<option value={o.name}>{o.name}</option>))}
            </Field>

            <Field
                name="l3"
                label={'3级分类'}
                placeholder="选择3级分类"
                component="select"
            >
                <option value={null}></option>
                {l3Options.map(o => (<option value={o.id}>{o.name}</option>))}
            </Field>
        </div>);
    }


}

export default CategorySelector;
