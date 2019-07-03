import React, { Component } from 'react';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import Axios from 'axios';
import './App.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.myGrid = React.createRef(),
            this.myPanel = React.createRef()

        this.state = {
            sortInfo: 'Name',
            columns: [
                { text: 'Name', datafield: 'Name', width: '25%' },
                { text: 'Gender', datafield: 'Sex', width: '15%' },
                { text: 'Age', datafield: 'Age', width: '15%' },
                { text: 'Survived', datafield: 'Survived', width: '15%' },
                { text: 'Fare', datafield: 'Fare', cellsformat: 'c2', width: '15%' },
                { text: 'Embarked', datafield: 'Embarked', width: '15%' }
            ],
            source: []
        };

        this.myGridOnSort = this.myGridOnSort.bind(this);
        this.removeSortBtnOnClick = this.removeSortBtnOnClick.bind(this);
        this.sortBackGroundBtn = this.sortBackGroundBtn.bind(this);
    }

    myGridOnSort(event) {
        this.myPanel.current.clearcontent();
        const sortinformation = event.args.sortinformation;
        let sortdirection = sortinformation.sortdirection.ascending ? 'ascending' : 'descending';
        if (!sortinformation.sortdirection.ascending && !sortinformation.sortdirection.descending) {
            sortdirection = 'null';
        }
        const eventData = 'Triggered "sort" event <div>Column:' + sortinformation.sortcolumn + ', Direction: ' + sortdirection + '</div>';
        this.myPanel.current.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }


    removeSortBtnOnClick() {
        this.myGrid.current.removesort();
    };

    sortBackGroundBtn(event) {
        this.myGrid.current.setOptions({ showsortcolumnbackground: event.args.checked });
    }

    componentDidMount() {
        Axios.get('/api/passengers/survival')
            .then(res => {
                var data = res.data;
                return data;
            })
            .then(src => {
                const source = {
                    datatype: 'json',
                    datafields: [
                        { name: '_id', type: 'string' },
                        { name: 'Age', type: 'number' },
                        { name: 'Embarked', type: 'string' },
                        { name: 'Fare', type: 'number' },
                        { name: 'Name', type: 'string' },
                        { name: 'Sex', type: 'string' },
                        { name: 'Survived', type: 'number' },
                    ],
                    localdata: src,
                    sortcolumn: 'Name',
                    sortdirection: 'asc'
                }
                const dataAdapter = new jqx.dataAdapter(source);
                this.setState({ source: dataAdapter })
            })
    }

    render() {

        return (
            <div>
                <JqxGrid
                    ref={this.myGrid} onSort={this.myGridOnSort}
                    width={700} source={this.state.source} columns={this.state.columns} selectionmode={'multiplecellsadvanced'}
                    pageable={true} filterable={true} autoheight={true} sortable={true} theme={'material-purple'}
                    altrows={true}
                />
                <div className="text-center" style={{ float: 'left', marginRight: '10px', marginTop: '25px' }}>
                    <JqxButton onClick={this.removeSortBtnOnClick} height={20}>Remove Sort</JqxButton>
                    <div style={{ marginTop: '10px' }} />
                    <JqxCheckBox className="text-center" onChange={this.sortBackGroundBtn} height={25} checked={true}>Sort Background</JqxCheckBox>
                </div>
                <div className="text-center" style={{ marginLeft: '100px', float: 'left', marginTop: '25px' }}>
                    Event Log:
                        <JqxPanel ref={this.myPanel} style={{ border: 'none' }} width={300} height={80} />
                </div>
            </div>
        )
    }
}
export default Table;
