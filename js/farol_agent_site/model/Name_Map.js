import { Farol_Variables } from "./Farol_Variables.js";

var nameList = [
  "James",
  "Robert",
  "John",
  "Michael",
  "David",
  "William",
  "Richard",
  "Joseph",
  "Thomas",
  "Christopher",
  "Charles",
  "Daniel",
  "Matthew",
  "Anthony",
  "Mark",
  "Donald",
  "Steven",
  "Andrew",
  "Paul",
  "Joshua",
  "Kenneth",
  "Kevin",
  "Brian",
  "George",
  "Timothy",
  "Ronald",
  "Jason",
  "Edward",
  "Jeffrey",
  "Ryan",
  "Jacob",
  "Gary",
  "Nicholas",
  "Eric",
  "Jonathan",
  "Stephen",
  "Larry",
  "Justin",
  "Scott",
  "Brandon",
  "Benjamin",
  "Samuel",
  "Gregory",
  "Alexander",
  "Patrick",
  "Frank",
  "Raymond",
  "Jack",
  "Dennis",
  "Jerry",
  "Mary",
  "Patricia",
  "Jennifer",
  "Linda",
  "Elizabeth",
  "Barbara",
  "Susan",
  "Jessica",
  "Sarah",
  "Karen",
  "Lisa",
  "Nancy",
  "Betty",
  "Sandra",
  "Margaret",
  "Ashley",
  "Kimberly",
  "Emily",
  "Donna",
  "Michelle",
  "Carol",
  "Amanda",
  "Melissa",
  "Deborah",
  "Stephanie",
  "Dorothy",
  "Rebecca",
  "Sharon",
  "Laura",
  "Cynthia",
  "Amy",
  "Kathleen",
  "Angela",
  "Shirley",
  "Brenda",
  "Emma",
  "Anna",
  "Pamela",
  "Nicole",
  "Samantha",
  "Katherine",
  "Christine",
  "Helen",
  "Debra",
  "Rachel",
  "Carolyn",
  "Janet",
  "Maria",
  "Catherine",
  "Heather"
]


function setupNames(AGENTS_NR, has_player_agent) {
    let nameMap = nameList.slice(0, AGENTS_NR);
    if (has_player_agent) {
        nameMap[Farol_Variables.player_agent_index] = "You";
    }

    return nameMap;
}

export { setupNames };