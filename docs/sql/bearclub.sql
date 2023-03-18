
create table EC(
EC_name		varchar(70) primary key,
Timezone	varchar(5),
Time_availability_start		time,
Time_availability_end		time
);

create table DPS_Chars(
EC				varchar(70),
Char_name		varchar(80) primary key,
Fame			int,
Build			varchar(40),
constraint fk_EC_dps foreign key (EC) references EC (EC_name),
constraint check_fame check(Fame >40047)
);

create table Buffers(
EC				varchar(70),
Char_name		varchar(80) primary key,
Fame			int,
Stat_value	int,
PMI_value	int,
constraint fk_EC_buff foreign key (EC) references EC (EC_name),
constraint check_fame_buff check(Fame >40047)
);