// Article.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from '../components/ArticleList';

const mockPosts = [
    { id: 1, title: 'Test Post 1', date: '2024-01-01', preview: 'This is a preview of the first post.' },
    { id: 2, title: 'Test Post 2', preview: 'This is a preview of the second post.' }, // No date provided
];

test('renders <article> element', () => {
    render(<ArticleList posts={mockPosts} />);
    expect(screen.getAllByRole('article')).toHaveLength(mockPosts.length);
});

test('renders a <h3> with the title of the post', () => {
    render(<ArticleList posts={mockPosts} />);
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
});

test('renders a <small> with the date of the post', () => {
    render(<ArticleList posts={mockPosts} />);
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
    expect(screen.getByText('Date not available')).toBeInTheDocument();
});

test('uses a default value for the date if no date is passed as a prop', () => {
    render(<ArticleList posts={mockPosts} />);
    expect(screen.getByText('Date not available')).toBeInTheDocument();
});

test('renders a <p> with the preview text', () => {
    render(<ArticleList posts={mockPosts} />);
    expect(screen.getByText('This is a preview of the first post.')).toBeInTheDocument();
    expect(screen.getByText('This is a preview of the second post.')).toBeInTheDocument();
});


