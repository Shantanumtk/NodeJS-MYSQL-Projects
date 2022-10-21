/*
getAllfriends() Procedure
*/
USE `profile`;
DROP procedure IF EXISTS `getAllfriends`;

DELIMITER $$
USE `profile`$$
CREATE PROCEDURE `getAllfriends` ()
BEGIN
select * from friends limit 5;
END$$

DELIMITER ;

/*
getfriendsbyId Procedure 
*/

USE `profile`;
DROP procedure IF EXISTS `getfriendsbyId`;

DELIMITER $$
USE `profile`$$
CREATE PROCEDURE `getfriendsbyId` (
      IN friendid int
)
BEGIN
select * from friends 
where friend_id = friendid;
END$$

DELIMITER ;

/*
postFriends Procedure
*/

USE `profile`;
DROP procedure IF EXISTS `postFriends`;

DELIMITER $$
USE `profile`$$
CREATE PROCEDURE `postFriends`(
      IN f_fname varchar(255),
      IN f_lname varchar(255),
      IN f_cphone varchar(255),
      IN f_age int
      )
BEGIN
INSERT INTO 
	friends(first_name, last_name,cell_phone,age)
VALUES
	(f_fname,f_lname,f_cphone,f_age);
    
END$$

DELIMITER ;

/*
putcellbyId Procedure
*/

USE `profile`;
DROP procedure IF EXISTS `putcellbyId`;

DELIMITER $$
USE `profile`$$
CREATE PROCEDURE `putcellbyId` (
	   IN f_friendid varchar (255),
       IN f_cphone varchar (255)
)
BEGIN
UPDATE friends SET cell_phone = f_cphone WHERE friend_id = f_friendid;
END$$

DELIMITER ;

/*
putFirstnamebyId Procedure
*/
USE `profile`;
DROP procedure IF EXISTS `putFirstnamebyId`;

DELIMITER $$
USE `profile`$$
CREATE PROCEDURE `putFirstnamebyId` (
	   IN f_friendid varchar (255),
       IN f_fname varchar (255)
)
BEGIN
UPDATE friends SET first_name = f_fname WHERE friend_id = f_friendid;
END$$

DELIMITER ;

/*
putlastnamebyId Procedure
*/

USE `profile`;
DROP procedure IF EXISTS `putLastnamebyId`;

DELIMITER $$
USE `profile`$$
CREATE PROCEDURE `putLastnamebyId` (
	   IN f_friendid varchar (255),
       IN f_lname varchar (255)
)
BEGIN
UPDATE friends SET last_name = f_lname WHERE friend_id = f_friendid;
END$$

DELIMITER ;

/*
putAgebyId Procedure
*/

USE `profile`;
DROP procedure IF EXISTS `putAgebyId`;

DELIMITER $$
USE `profile`$$
CREATE PROCEDURE `putAgebyId` (
	   IN f_friendid varchar (255),
       IN f_age varchar (255)
)
BEGIN
UPDATE friends SET age = f_age WHERE friend_id = f_friendid;
END$$

DELIMITER ;

/*
deleteId Procedure
*/

USE `profile`;
DROP procedure IF EXISTS `deleteId`;

DELIMITER $$
USE `profile`$$
CREATE PROCEDURE `deleteId` (
	   IN f_friendid varchar (255)
)
BEGIN
DELETE FROM friends WHERE friend_id = f_friendid;
END$$

DELIMITER ;

