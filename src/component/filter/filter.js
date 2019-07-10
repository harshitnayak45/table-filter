import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import listing from '../../listing/listings.json';

const { fields, data } = listing;
const products = [];
const ddd = data.map(d => {
    return fields.reduce((o, k, i) => ({ ...o, [k]: d[i] }), {});
});

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fillterState: [],
            priceFilter: 1000,
            bathrooms: 1,
            bedrooms: 1,
            value: { min: 0, max: 2000 },
        };
    }

    componentDidMount() {

        this.setState({
            fillterState: ddd,

        })
        this.filterFunction();

    }
    handleOnChange = (value) => {

        this.setState((state) => {
            if (this.filterFunction()) return undefined;
            else return { priceFilter: value }
        });
    }
    handleFilter = (value) => {
        console.log('xxxxxx val bed', this.state.bedrooms);

        this.filterFunction();

    }

    filterFunction = () => {
        const products = [];
        for (var i = 0; i < ddd.length; i++) {

            if (ddd[i].bedrooms === this.state.bedrooms && ddd[i].bathrooms === this.state.bathrooms && ddd[i].price <= this.state.priceFilter) {
                products.push(ddd[i]);
            }
        }

        this.setState({ fillterState: products });
    }
    renderShowsTotal(start, to, total) {
        return (
            <p style={{ color: 'blue' }}>

            </p>
        );
    }

    render() {

        const options = {
            page: 1,  // which page you want to show as default
            sizePerPageList: [{
                text: '15', value: 15
            }, {
                text: '25', value: 25
            }, {
                text: 'All', value: products.length
            }], // you can change the dropdown list for size per page
            sizePerPage: 15,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            prePageTitle: 'Go to previous', // Previous page button title
            nextPageTitle: 'Go to next', // Next page button title
            firstPageTitle: 'Go to first', // First page button title
            lastPageTitle: 'Go to Last', // Last page button title
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'bottom'  // default is bottom, top and both is all available
            // keepSizePerPageState: true //default is false, enable will keep sizePerPage dropdown state(open/clode) when external rerender happened
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
            // hidePageListOnlyOnePage: true > Hide the page list if only one page.
        };
        let { priceFilter } = this.state
        return (
            <div>
              
        <main id="page-content-wrapper" role="main">
        <div className="container ">
        <div className="form-group">
            <h3 className="top-title">Apartments in Ann Arbor, MI</h3>
            </div>
            <div className="form-group">
            <div className="spacer">
                        <div className="col-md-7">
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group" role="group" aria-label="Third group">
                                  <span className="text-box">  BedRooms</span>
  </div>
                                <div className="btn-group mr-2" role="group">
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bedrooms == 1 ? 'activeCls' : '')}
                                        onClick={() => this.setState({ bedrooms: 1 }, this.handleFilter)}>1+</button>
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bedrooms == 2 ? 'activeCls' : '')} onClick={() => this.setState({ bedrooms: 2 }, this.handleFilter)}>2+</button>
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bedrooms == 3 ? 'activeCls' : '')} onClick={() => this.setState({ bedrooms: 3 }, this.handleFilter)}>3+</button>
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bedrooms == 4 ? 'activeCls' : '')} onClick={() => this.setState({ bedrooms: 4 }, this.handleFilter)}>4+</button>
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bedrooms == 5 ? 'activeCls' : '')} onClick={() => this.setState({ bedrooms: 5 }, this.handleFilter)}>5+</button>
                                </div>
                                <div className="btn-group" role="group">
                                <span className="text-box"> BothRooms</span>
  </div>
                                <div className="btn-group mr-2" role="group" aria-label="Second group">
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bathrooms == 1 ? 'activeCls' : '')} onClick={() => this.setState({ bathrooms: 1 }, this.handleFilter)}>1+</button>
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bathrooms == 2 ? 'activeCls' : '')} onClick={() => this.setState({ bathrooms: 2 }, this.handleFilter)}>2+</button>
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bathrooms == 3 ? 'activeCls' : '')} onClick={() => this.setState({ bathrooms: 3 }, this.handleFilter)}>3+</button>
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bathrooms == 4 ? 'activeCls' : '')} onClick={() => this.setState({ bathrooms: 4 }, this.handleFilter)}>4+</button>
                                    <button type="button" className={'btn btn-secondary ' + (this.state.bathrooms == 5 ? 'activeCls' : '')} onClick={() => this.setState({ bathrooms: 5 }, this.handleFilter)}>5+</button>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-5">
                            {/* <div className='slider'>Price
                            <Slider
                                    value={priceFilter}
                                    onChange={this.handleOnChange}
                                    min={0}
                                    max={2000}
                                />
                            </div> */}
                             
                                <div className="btn-group mr-2" role="group">
                               <span className="text-price"> Price</span>
                                <Slider
                                    value={priceFilter}
                                    onChange={this.handleOnChange}
                                    min={0}
                                    max={2000}
                                />
                                </div>
                        </div>
                    </div>
            </div>
            <div className="form-group">
                   <BootstrapTable data={this.state.fillterState} pagination={true} options={options}>
                        {
                            fields.map((f, i) => (
                                <TableHeaderColumn dataField={f} isKey={i === 0 ? true : false} key={f}>{f}</TableHeaderColumn>
                            ))
                        }

                    </BootstrapTable>
                </div>
                   
                </div>
        </main>
            </div>
        );
    }
}

export default Filter; 
