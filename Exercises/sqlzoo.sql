/* Exercises 0: SELECT basics */

SELECT population FROM world
  WHERE name = 'Germany';
  
SELECT name, population FROM world
  WHERE name IN ('Sweden', 'Norway', 'Denmark');
  
SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000;
  
/* Exercises 1: SELECT name */ 

SELECT name FROM world
  WHERE name LIKE 'Y%';
  
SELECT name FROM world
  WHERE name LIKE '%y';

SELECT name FROM world
  WHERE name LIKE '%x%';

SELECT name FROM world
  WHERE name LIKE '%land';

SELECT name FROM world
  WHERE name LIKE 'C%' AND name LIKE '%ia';

SELECT name FROM world
  WHERE name LIKE '%oo%';
  
  
/* has three a characters */
SELECT name FROM world
  WHERE name LIKE '%a%a%a%';
  
/* t is second character */
SELECT name FROM world
 WHERE name LIKE '_t%'
ORDER BY name;

/* two o characters separated by two others */
SELECT name FROM world
 WHERE name LIKE '%o__o%';

SELECT name FROM world
 WHERE LENGTH(name) = 4;

SELECT name
FROM world
WHERE name = capital;

SELECT name
  FROM world
 WHERE capital = CONCAT(name, ' City');

SELECT capital, name
FROM world
WHERE capital LIKE CONCAT('%', name, '%');

SELECT capital, name
FROM world
WHERE capital LIKE CONCAT('%', name, '%') AND capital != name;

SELECT name, REPLACE(capital, name, '') AS extension
FROM world
WHERE capital LIKE CONCAT('%', name, '%') AND capital > name;



/* Exercises 2: SELECT FROM world*/

SELECT name, continent, population FROM world;

SELECT name FROM world
WHERE population > 200000000;

SELECT name, gdp/population AS gdp_per_capita
FROM world
WHERE population >= 200000000;

SELECT name, population/1000000 AS pop_mils
FROM world
WHERE continent = 'South America';

SELECT name, population
FROM world
WHERE name IN ('France', 'Germany', 'Italy');

SELECT name
FROM world
WHERE name LIKE '%United%';

SELECT name, population, area
FROM world
WHERE population > 250000000 OR area > 3000000;

SELECT name, population, area
FROM world
WHERE (population > 250000000 AND area <= 3000000) OR (population <= 250000000 AND area > 3000000);

SELECT name, ROUND(population/1000000, 2) AS population_mil, ROUND(gdp/1000000000, 2) AS gdp_bil
FROM world
WHERE continent = 'South America';

SELECT name, ROUND(gdp/population, -3) AS per_capita_gdp
FROM world
WHERE gdp >= 1000000000000;

SELECT name, capital
  FROM world
 WHERE LENGTH(name) = LENGTH(capital);
 
SELECT name, capital
FROM world
WHERE LEFT(name, 1) = LEFT(capital, 1) AND name != capital;

/* all 5 vowels with no spaces */
SELECT name
   FROM world
WHERE name LIKE '%A%' AND name LIKE '%E%' AND name LIKE '%I%' AND name LIKE '%O%' AND name LIKE '%U%'
AND name NOT LIKE '% %';

/* Exercises 3: SELECT FROM nobel */
SELECT yr, subject, winner
  FROM nobel
 WHERE yr = 1950;
 
 SELECT winner
  FROM nobel
 WHERE yr = 1962
   AND subject = 'Literature';

SELECT yr, subject
FROM nobel
WHERE winner = 'Albert Einstein';

SELECT winner
FROM nobel
WHERE yr >= 2000 AND subject = 'PEACE';

SELECT yr, subject, winner
FROM nobel
WHERE subject = 'Literature' AND yr >= 1980 AND yr <= 1989;

SELECT * FROM nobel
 WHERE winner IN ('Theodore Roosevelt','Woodrow Wilson', 'Jimmy Carter', 'Barack Obama');
 
SELECT winner FROM nobel
WHERE winner LIKE 'John %';

SELECT yr, subject, winner
FROM nobel
WHERE subject = 'Physics' AND yr = 1980
OR subject = 'Chemistry' AND yr = 1984;

SELECT yr, subject, winner
FROM nobel
WHERE subject NOT IN ('Chemistry', 'Medicine') AND yr = 1980;

SELECT yr, subject, winner
FROM nobel
WHERE (subject = 'Medicine' AND yr < 1910)
OR (subject = 'Literature' AND yr >= 2004);

SELECT * FROM nobel
WHERE winner = 'Peter Grünberg';

/*SELECT * FROM nobel
WHERE winner = 'Eugene O\'Neill';*/

SELECT winner, yr, subject
FROM nobel
WHERE winner LIKE 'Sir %'
ORDER BY yr DESC, winner ASC;

SELECT winner, subject
  FROM nobel
 WHERE yr=1984
 ORDER BY subject IN ('Physics','Chemistry') ASC, subject, winner;
 

/* Exercises 4: SELECT within SELECT */

/* pop greater than Russia's */
SELECT name FROM world
  WHERE population >
     (SELECT population FROM world
      WHERE name='Russia');

/* countries richer per capita than the UK in Europe */
SELECT name FROM world
WHERE continent = 'Europe'
AND gdp/population > 
(SELECT gdp/population 
FROM world
WHERE name = 'United Kingdom');

/* name and continent of countries in the continents containing either Argentina or Australia */
 SELECT name, continent
FROM world
WHERE continent IN
(SELECT continent FROM world WHERE name= 'Argentina' OR name= 'Australia')
ORDER BY name ASC;

/* Countries more populous than Canada but less than Poland */
SELECT name, population
FROM world
WHERE population >
(SELECT population FROM world WHERE name = 'Canada')
AND population <
(SELECT population FROM world WHERE name = 'Poland');

/* % of population relative to Germany */
SELECT name, 
  CONCAT(ROUND(population/(SELECT population FROM world WHERE name = 'Germany') * 100, 0), '%') AS pop
FROM world
WHERE continent = 'Europe';

/* countries with GDP greater than every country in Europe*/
SELECT name
FROM world
WHERE gdp > ALL(SELECT gdp FROM world WHERE gdp > 0 AND continent = 'Europe');

/* find largest country by area in each continent */
SELECT continent, name, area FROM world x
  WHERE area >= ALL
    (SELECT area FROM world y
        WHERE y.continent=x.continent
          AND area >0);

/* first alphabetical for each continent */
SELECT continent, name FROM world x
WHERE name <= ALL(SELECT name FROM world y WHERE x.continent = y.continent);

/* find continents where all countries have a population <= 25000000 */
SELECT name, continent, population
FROM world x
WHERE 25000000 >= ALL(SELECT population FROM world y WHERE y.continent = x.continent);

/* countries with populations three times greater than any of their continent mates */
SELECT x.name, x.continent
FROM world AS x
WHERE x.population/3 > ALL(SELECT y.population FROM world AS y
WHERE x.continent = y.continent AND x.name != y.name);


/* Exercises 5: SUM and COUNT */

SELECT SUM(population)
FROM world;

SELECT DISTINCT continent FROM world;

SELECT SUM(gdp) FROM world
WHERE continent = 'Africa';

SELECT COUNT(*)
FROM world
WHERE area >= 1000000;

SELECT SUM(population)
FROM world
WHERE name IN ('Estonia', 'Latvia', 'Lithuania');

/* number of countries per continent */
SELECT continent, COUNT(name)
FROM world
GROUP BY continent;

/* continent and number of countries with populations at least 10 million */
SELECT continent, COUNT(name)
FROM world
WHERE population >= 10000000
GROUP BY continent;

/* continents with total pop of at least 100 million */
SELECT continent
FROM world
GROUP BY continent
HAVING SUM(population) >= 100000000;

/* Exercises 6: JOIN */
SELECT matchid, player FROM goal 
  WHERE teamid ='GER';

SELECT id,stadium,team1,team2
  FROM game
WHERE id = 1012;

SELECT player, teamid, stadium, mdate
  FROM game JOIN goal ON game.id = goal.matchid
WHERE teamid = 'GER';

SELECT team1, team2, player
FROM game 
JOIN goal ON goal.matchid = game.id
WHERE player LIKE 'Mario%';

SELECT player, teamid, coach, gtime
  FROM goal 
  JOIN eteam ON goal.teamid = eteam.id
 WHERE gtime<=10;
 
SELECT mdate, eteam.teamname
FROM game
JOIN eteam ON eteam.id = game.team1
WHERE eteam.coach LIKE 'Fernando Santos';

SELECT player
FROM goal
JOIN game ON goal.matchid = game.id
WHERE game.stadium = 'National Stadium, Warsaw';

SELECT DISTINCT player
FROM game JOIN goal ON matchid = id 
JOIN eteam ON eteam.id = goal.teamid
WHERE (team1='GER' OR team2='GER') AND teamid != 'GER';

/* num goals scored by team */
SELECT teamname, COUNT(*)
FROM eteam JOIN goal ON id=teamid
GROUP BY teamname;

/* num goals scored by stadium */
SELECT stadium, COUNT(*)
FROM game
JOIN goal ON goal.matchid = game.id
GROUP BY game.stadium;

/* info including goals scored for every game involving Poland */
SELECT matchid, mdate, COUNT(goal.gtime) AS goals
  FROM game JOIN goal ON goal.matchid = game.id 
 WHERE (team1 = 'POL' OR team2 = 'POL')
GROUP BY matchid, mdate;

/*For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER' */
SELECT game.id, game.mdate, COUNT(*) AS goals
FROM game 
JOIN goal ON goal.matchid = game.id
WHERE goal.teamid = 'GER'
GROUP BY game.id, game.mdate;

/* for each game, get the teams and the score for each team */
SELECT  game.mdate, game.team1,
	SUM(CASE WHEN goal.teamid=game.team1 THEN 1 ELSE 0 END) AS score1, 
	game.team2,
	SUM(CASE WHEN goal.teamid=game.team2 THEN 1 ELSE 0 END) AS score2
FROM game
INNER JOIN goal ON game.id=goal.matchid
GROUP BY game.mdate, goal.matchid, game.team1, game.team2;

/* Exercises 7: More JOIN operators */
SELECT id, title
FROM movie
WHERE yr=1962;

SELECT yr
FROM movie
WHERE title LIKE 'Citizen Kane';

SELECT id, title, yr
FROM movie
WHERE title LIKE '%Star Trek%'
ORDER BY yr ASC;

SELECT id
FROM actor
WHERE name LIKE 'Glenn Close';

SELECT id
FROM movie
WHERE title LIKE 'Casablanca';

/*Cast list for movie*/
SELECT a.name
FROM casting c JOIN actor a
ON a.id = c.actorid
WHERE c.movieid=11768;

/*Cast list for Alien*/
SELECT a.name
FROM actor a
JOIN casting c ON a.id = c.actorid
JOIN movie m ON c.movieid = m.id
WHERE m.title LIKE 'Alien';

/*Harrison Ford movies*/
SELECT m.title
FROM actor a
JOIN casting c
   ON a.id = c.actorid
JOIN movie m
   ON m.id = c.movieid
WHERE a.name LIKE 'Harrison Ford';

/*Harrison Ford movies, non-starring*/
SELECT m.title
FROM actor a
JOIN casting c
   ON a.id = c.actorid
JOIN movie m
   ON m.id = c.movieid
WHERE a.name LIKE 'Harrison Ford'
AND c.ord <> 1;

/*Stars for 1962 films*/
SELECT m.title, a.name
FROM movie m
JOIN casting c
   ON m.id = c.movieid
JOIN actor a
   ON a.id = c.actorid
WHERE m.yr = 1962 AND c.ord = 1;

/*years where travolta was in more than 2 movies*/
SELECT m.yr, COUNT(m.title) AS numMovies
FROM movie m 
JOIN casting c
   ON m.id = c.movieid
JOIN actor a
   ON a.id = c.actorid
WHERE a.name LIKE 'John Travolta'
GROUP BY m.yr
HAVING COUNT(m.title) > 2;

/* All movies, with lead actor, where Julie Andrews is a cast member */
SELECT DISTINCT m.title, a.name
FROM movie m
JOIN casting c
   ON m.id = c.movieid
JOIN actor a
   ON a.id = c.actorid
WHERE c.ord = 1
AND m.id IN
   (SELECT m2.id
   FROM movie m2
   JOIN casting c2
      ON m2.id = c2.movieid
   JOIN actor a2
      ON a2.id = c2.actorid
   WHERE a2.name = 'Julie Andrews');

/* All actors with 30+ starring roles*/
SELECT a.name
FROM actor a
JOIN casting c
   ON c.actorid = a.id
WHERE c.ord = 1
GROUP BY a.name
HAVING COUNT(*) >= 30
ORDER BY a.name ASC;

/* All 1978 movies, with actor count, and ordered */
SELECT m.title, COUNT(c.actorid) AS actorcount
FROM movie m
JOIN casting c
   ON c.movieid = m.id
WHERE m.yr = 1978
GROUP BY m.id, m.title
ORDER BY COUNT(c.actorid) DESC, m.title ASC;

/*All actors who worked with Art Garfunkel*/
SELECT DISTINCT a.name
FROM actor a
JOIN casting c
   ON c.actorid = a.id
WHERE a.name <> 'Art Garfunkel' AND c.movieid IN
(SELECT c2.movieid
FROM actor a2
JOIN casting c2 ON c2.actorid = a2.id
WHERE a2.name = 'Art Garfunkel');

/* Exercises 8: Using null */
SELECT name
FROM teacher
WHERE dept IS null;

/*All teachers, with department, regardless of whether teacher has a department*/
SELECT t.name, d.name
FROM teacher t
LEFT OUTER JOIN dept d
ON t.dept = d.id;

/*All departments, with teachers, regardless of whether dept has a teacher*/
SELECT t.name, d.name
FROM teacher t
RIGHT OUTER JOIN dept d
ON t.dept = d.id;

/*All teachers with mobile umbers, with a default number*/
SELECT t.name, COALESCE(t.mobile, '07986 444 2266')
FROM teacher t;

/*All teachers*/
SELECT t.name, COALESCE(d.name, 'None')
FROM teacher t
LEFT JOIN dept d
ON t.dept = d.id;

SELECT COUNT(t.id), COUNT(t.mobile)
FROM teacher t;

/*Teacher count by dept*/
SELECT d.name, COUNT(t.name)
FROM teacher t
RIGHT JOIN dept d
   ON t.dept = d.id
GROUP BY d.id, d.name;

/* Group as science or art teachers*/
SELECT t.name, 
   CASE WHEN t.dept = 1 OR t.dept = 2 THEN 'Sci'
   WHEN t.dept = 3 THEN 'Art'
   ELSE 'None'
   END AS type
FROM teacher t
LEFT JOIN dept d
ON t.dept = d.id;

/* Exercises 8+: Numeric examples */

/*Percent who strongly agree on a question, meeting university and subject requirements*/
SELECT A_STRONGLY_AGREE
  FROM nss
 WHERE question='Q01'
   AND institution='Edinburgh Napier University'
   AND subject='(8) Computer Science';

SELECT institution, subject
FROM nss
WHERE question='Q15'
AND score >= 100;

SELECT institution,score
FROM nss
WHERE question='Q15'
   AND score < 50
   AND subject='(8) Computer Science';

/*Number of responses for a question, for each of two departments*/
SELECT subject, SUM(response)
FROM nss
WHERE question='Q22'
   AND (subject='(8) Computer Science' 
   OR subject='(H) Creative Arts and Design')
GROUP BY subject;

/*Total students who strongly agree to a question, by department*/
SELECT subject, SUM(response*A_STRONGLY_AGREE/100)
FROM nss
WHERE question='Q22'
   AND (subject='(H) Creative Arts and Design' 
   OR subject='(8) Computer Science')
GROUP BY subject;

/*Percent who strongly agree, grouped by subject*/
SELECT subject, ROUND(SUM(response * A_STRONGLY_AGREE) / SUM(response))
FROM nss
WHERE question='Q22'
   AND (subject='(8) Computer Science'
   OR subject='(H) Creative Arts and Design')
GROUP BY subject;

/*Avg scores for a question, by Manchester university*/
SELECT institution, ROUND(AVG(score)) AS score
FROM nss
WHERE question='Q22'
   AND (institution LIKE '%Manchester%')
GROUP BY institution
ORDER BY institution ASC;

/*Show the institution, the total sample size and the number of computing students for institutions in Manchester for 'Q01'.*/
SELECT institution, SUM(sample), SUM(CASE WHEN subject = '(8) Computer Science' THEN sample ELSE 0 END)
FROM nss
WHERE question='Q01'
   AND institution LIKE '%Manchester%'
GROUP BY institution;

/* Exercises 9: Self join */

SELECT COUNT(*)
FROM stops;

SELECT id
FROM stops
WHERE name = 'Craiglockhart';

/*4 LRT service*/
SELECT id, name
FROM stops s
JOIN route r
WHERE r.stop = s.id
AND num = 4
AND company='LRT';

/* Companies with stops at both stations requested*/
SELECT company, num, COUNT(*)
FROM route WHERE stop=149 OR stop=53
GROUP BY company, num
HAVING COUNT(*) = 2;

/*All services from one specific destination to another*/
SELECT a.company, a.num, a.stop, b.stop
FROM route a JOIN route b ON
  (a.company=b.company AND a.num=b.num)
WHERE a.stop=53 AND b.stop=149;

/*Same as the previous, except with names*/
SELECT a.company, a.num, stopa.name, stopb.name
FROM route a JOIN route b ON
  (a.company=b.company AND a.num=b.num)
  JOIN stops stopa ON (a.stop=stopa.id)
  JOIN stops stopb ON (b.stop=stopb.id)
WHERE stopa.name='Craiglockhart'
AND stopb.name='London Road';

/* #7 */
SELECT DISTINCT a.company, a.num
FROM route a 
JOIN route b
ON (a.company=b.company AND a.num=b.num)
WHERE a.stop=115 AND b.stop=137; 

/* #8 */
SELECT a.company, a.num
FROM route a
JOIN route b
ON (a.company=b.company AND a.num=b.num)
WHERE a.stop=
   (SELECT id FROM stops WHERE name = 'Craiglockhart')
AND b.stop=
   (SELECT id FROM stops WHERE name = 'Tollcross');

/* #9 All stops that can be directly reached from Craiglockhart using the LRT line */
SELECT DISTINCT s.name, r2.company, r2.num
FROM route r1 JOIN route r2 
   ON (r1.company = r2.company AND r1.num = r2.num)
JOIN stops s 
   ON r2.stop = s.id
WHERE r1.company = 'LRT'
AND r1.stop IN (SELECT id FROM stops s2 WHERE s2.name='Craiglockhart');

/* #10. All two-bus trips from Craiglockhart to Sighthill */
SELECT DISTINCT a.num, a.company, sb.name, c.num, c.company
FROM route a
JOIN route b
   ON (a.company=b.company AND a.num=b.num)
JOIN route d
   ON (d.stop=b.stop)
JOIN route c
   ON (c.num=d.num AND c.company=d.company)
JOIN stops sa
   ON sa.id = a.stop
JOIN stops sc
   ON sc.id=c.stop
JOIN stops sb 
   ON sb.id=b.stop
WHERE sa.name = 'Craiglockhart'
AND sc.name = 'Sighthill';