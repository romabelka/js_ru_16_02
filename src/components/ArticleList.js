import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Select from 'react-select'
require('react-select/dist/react-select.css')

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array,
        addComment: PropTypes.func,
        deleteArticle: PropTypes.func
    }

    constructor() {
        super()
        this.state = {
            open: null
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.getArticles()}
                </ul>
            </div>
        )
    }

    getArticles() {
        const { articles, deleteArticle, addComment } = this.props
        return articles.map((article) =>
                <li key={article.id}>
                    <Article {...{ article, deleteArticle, addComment }}
                             isOpen = {article.id === this.state.open}
                             onClick = {this.open.bind(this, article.id)}
                    />
                </li>
            )
    }

    getFilter() {
        const options = this.props.articles.map(({ title, id }) => {
            return {
                label: title,
                value: id
            }
        })
        return <Select
            value = {this.state.selected}
            options = {options}
            multi = {true}
            onChange = {this.changeFilter}
        />
    }

    changeFilter = (selected) => {
        this.setState({
            selected: selected.split(',')
        })
    }

    open(open) {
        this.setState({ open })
    }
}

export default ArticleList