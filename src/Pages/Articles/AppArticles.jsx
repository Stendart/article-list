import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import './AppArticles.css'

import AppCard from "../../Components/AppCard/AppCard";
import AppModal from "../../Components/AppModal/AppModal";
import {loadArticles} from "../../store/actions/articles";
import {changeCardSize} from "../../store/actions/setting";

class AppArticles extends PureComponent {
    state={
        posts: [],
        postsCount: 3,
        increasePostCount: 3,
        isShowModal: false
    }

    componentDidMount() {
        this.props.loadArticlesList();
    }

    getPartArticles = () => {
        return this.props.articlesList?.slice(0, this.state.postsCount);
    }

    isLastArticleCheck = () => {
        return this.props.articlesList?.length < this.state.postsCount;
    }

    showMoreClickHandler = () => {
        this.setState({postsCount: this.state.postsCount + this.state.increasePostCount});
    }

    changeCardSizeClickHandler = () => {
        const cardSize = this.props.cardSize;
        const cardSizeAfterChange = cardSize === 'big' ? 'small' : 'big';
        this.props.changeCardSize(cardSizeAfterChange)
    }

    detailInformationClickHandler = (id) => {
        console.log('click by', id);
        this.setState({isShowModal: true})
    }

    closeModal = (e) => {
        this.setState({isShowModal: false})
    }

    render() {
        const cardSize = this.props.cardSize;
        const btnText = cardSize === 'big' ? 'Make small cards' : 'Make big cards';

        return (
            <div className='articles'>
                <div className='articles__header'>
                    <h2>Articles</h2>
                    <div className="articles__setting">
                        <button className='btn btn--primary' onClick={this.changeCardSizeClickHandler}> { btnText } </button>
                    </div>
                </div>
                <div className="card-list">
                    {this.getPartArticles().map(post => (
                        <AppCard
                            className={`card-list__item card-list__item--${cardSize}` }
                            key={post.id} title={post.title}
                            id={post.id}
                            viewClick={this.detailInformationClickHandler}
                            description={post.body} />
                    ))}
                </div>
                {
                    this.state.isShowModal &&
                    <AppModal closeHandler={this.closeModal} />
                }
                <button className='btn btn--primary articles__btn'
                        onClick={this.showMoreClickHandler}
                        disabled={this.isLastArticleCheck()}>Show more</button>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        articlesList: state.article,
        cardSize: state.setting.cardSize
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        loadArticlesList: () => dispatch(loadArticles()),
        changeCardSize: (cardSize) => dispatch(changeCardSize(cardSize))
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(AppArticles);