CREATE DATABASE messenger;
USE messenger;

CREATE TABLE users (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    user_id         VARCHAR(30) NOT NULL,
    password        VARCHAR(255) NOT NULL,
    nickname        VARCHAR(30),
    profile_link    VARCHAR(255),
    status_message  VARCHAR(255),
    is_deleted      BOOLEAN DEFAULT FALSE,
    join_date       DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE channels (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(100),
    creator_id      INT,
    channel_link    VARCHAR(255),
    max_users       INT,
    is_deleted      BOOLEAN DEFAULT FALSE,
    created_date    DATE,
    FOREIGN KEY (creator_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE chats (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    message         TEXT,
    sender_id       INT,
    channel_id      INT,
    created_date    DATE,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (channel_id) REFERENCES channels(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE follows (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    follower_id     INT,
    followee_id     INT,
    followed_date   DATE,
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followee_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE blocks (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    blocker_id      INT,
    blocked_id      INT,
    blocked_date    DATE,
    FOREIGN KEY (blocker_id) REFERENCES users(id),
    FOREIGN KEY (blocked_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
