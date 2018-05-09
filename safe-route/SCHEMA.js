// create table users(
//     user_id serial primary key,
//     user_name varchar(50) unique,
//     email text not null unique,
//     first_name varchar(150) NOT NULL,
//     last_name varchar(150) NOT NULL,
//     phone_number BIGINT NOT NULL,
//     password text
//     )

// create table location(
//     location_id serial primary key,
//     user_id int references users(user_id),
//     starting_latitude decimal NOT NULL,
//     starting_longitude decimal NOT NULL,
//     starting_address text NOT NULL,
//     ending_longitude decimal,
//     ending_latitude decimal,
//     ending_address text,
//     travel_distance int,
//     travel_duration time,
//     eta time,
//     starting_time time,
//     ending_time time
//     )

// create table dependency(
//     dependency_id serial primary key,
//     sender int references users(user_id),
//     receiver int references users(user_id)
//     )

// create table notifications(
//     notification_id serial primary key,
//     sender int references users(user_id) NOT NULL,
//     receiver int references users(user_id) NOT NULL,
//     platform text NOT NULL,
//     received date NOT NULL,
//     body text NOT NULL
//     )

// create table primary_locations(
//     location_id serial primary key,
//     user_id int references users(user_id),
//     location_name varchar(100),
//     latitude decimal NOT NULL,
//     longitude decimal NOT NULL,
//     address text NOT NULL,
//     times_visited int DEFAULT 0
//     )

// create table squad(
//     group_id serial primary key,
//     name varchar(150),
//     founder int references users(user_id)
//     )

// create table squad_members(
//     member_id serial primary key,
//     member int references users(user_id),
//     squad_id int references squad(squad_id)
//     )
