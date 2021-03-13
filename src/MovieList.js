import React, { Component } from 'react';


class MovieList extends Component {
    render() {
        const {movies, users, moviesByUser} = this.props;
        return (
            <ul>
                {Object.keys(movies).map(id => (
                    <li key={id}>
                        <h2>{movies[id].name}</h2>
                        <p>Liked By:</p>
                        <ul>
                            {moviesByUser[id]
                                ? moviesByUser[id].map(userID => (<li>{users[userID].name}</li>))
                                : <p>None of the current users liked this movie</p>
                            }
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
}

export default MovieList;
