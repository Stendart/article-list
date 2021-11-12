import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import './AppArticles.css'

import AppCard from "../../Components/AppCard/AppCard";
import {loadArticles} from "../../store/actions/articles";

class AppArticles extends PureComponent {
    state={
        posts: [],
        postsCount: 3,
        increasePostCount: 3,
    }

    componentDidMount() {
        this.props.loadArticlesList()
    }

    getPartArticles = () => {
        return this.props.articlesList?.slice(0, this.state.postsCount)
    }

    isLastArticleCheck = () => {
        return this.props.articlesList?.length < this.state.postsCount
    }

    clickHandler = () => {
        this.setState({postsCount: this.state.postsCount + this.state.increasePostCount})
    }

    render() {
        return (
            <div className='articles'>
                <h2>Articles</h2>
                <div className="card-list">
                    {this.getPartArticles().map(post => (
                        <AppCard
                            className='card-list__item'
                            key={post.id} title={post.title}
                            description={post.body} />
                    ))}
                    <AppCard className='card-list__item' title='Title' description='some text' />
                </div>
                <button className='btn btn--primary articles__btn'
                        onClick={this.clickHandler}
                        disabled={this.isLastArticleCheck()}>Show more</button>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        articlesList: state.article
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        loadArticlesList: () => {
            dispatch(loadArticles())
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(AppArticles);