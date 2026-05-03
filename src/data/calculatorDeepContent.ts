// Per-tool deep content: 4 H2 sections in calculator.net style + 1-2 charts + 5 FAQs.
// Each entry is intentionally unique in tone and examples to avoid duplication.
// Stats and ranges are based on widely published references (WHO, CDC, NIH, IRS, NHTSA, etc.).
import type { ChartSpec } from '@/components/calculator/RichCharts';
import { CHART_COLORS } from '@/components/calculator/RichCharts';

export interface DeepFAQ { question: string; answer: string; }

export interface DeepSection {
  heading: string;
  paragraphs: string[];
  chart?: ChartSpec;
}

export interface DeepContent {
  // 4 H2 sections per spec
  whatIs: DeepSection;
  howTo: DeepSection;
  understanding: DeepSection;
  faqs: DeepFAQ[];
}

const C = CHART_COLORS;

export const deepContent: Record<string, DeepContent> = {
  // ─────────────────────────────────────────────── BMI
  bmi: {
    whatIs: {
      heading: 'What is a BMI Calculator?',
      paragraphs: [
        'A BMI calculator is a small piece of arithmetic with a long history. The body mass index formula was introduced in the 1830s by the Belgian mathematician Adolphe Quetelet, who was looking for a way to describe the "average man" using statistics rather than medicine. For more than a century the index lived quietly in academic journals until the World Health Organization adopted it in the 1990s as a public-health screening tool, and that is when the BMI calculator entered everyday life.',
        'The reason BMI matters is not because the number itself is magical, but because it links two things that are easy to measure, height and weight, into a value that loosely tracks the amount of body fat a typical adult is carrying. Doctors do not diagnose anything from BMI alone, but they use it as a starting point in the same way a thermometer starts a conversation about a fever.',
        'The interpretation of BMI is not the same everywhere. In Western countries the WHO cut-offs for "overweight" begin at 25, but several Asian health authorities lower that threshold to about 23 because metabolic risks like diabetes appear at lower BMIs in many Asian populations. That cultural and biological difference is one of the most important things to know before reading your own number.',
      ],
      chart: {
        type: 'rangeBar',
        title: 'WHO BMI categories for adults',
        caption: 'Data source: World Health Organization adult BMI classification.',
        alt: 'BMI chart showing healthy weight ranges for adults according to WHO standards',
        data: [
          { name: 'Underweight', from: 15, to: 18.5, color: C.info },
          { name: 'Normal', from: 18.5, to: 25, color: C.normal },
          { name: 'Overweight', from: 25, to: 30, color: C.warn },
          { name: 'Obese I', from: 30, to: 35, color: C.risk },
          { name: 'Obese II', from: 35, to: 40, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate BMI',
      paragraphs: [
        'The BMI formula is simple. In metric units you divide weight in kilograms by the square of height in metres: BMI = kg ÷ m². In imperial units you multiply weight in pounds by 703 and divide by height in inches squared. A 1.75 m adult who weighs 72 kg has a BMI of 72 ÷ (1.75 × 1.75) = 23.5, which sits comfortably inside the normal range.',
        'Two real-world examples help. A 5\' 6" (1.68 m) woman weighing 145 lb (65.8 kg) has a BMI of about 23.3, just below the overweight threshold. A 6\' (1.83 m) man weighing 210 lb (95.3 kg) has a BMI of 28.5, well into the overweight range and worth a conversation with his doctor about waist size and blood pressure.',
        'BMI gets confusing in a few specific cases. Trained athletes carry extra muscle, which weighs more than fat and pushes their BMI up even though their body fat is low. Older adults can lose muscle while gaining fat, so the same BMI at 70 can mean a very different body composition than at 30. Pregnancy, lower-limb amputation, and severe oedema also distort the score, which is why clinicians always combine BMI with at least one other measurement.',
      ],
      chart: {
        type: 'bar',
        title: 'WHO vs Asian-Pacific BMI thresholds',
        caption: 'Data source: WHO 2000 and Asia-Pacific consensus on adult BMI cut-offs.',
        alt: 'Bar chart comparing Western WHO BMI thresholds with Asian-Pacific BMI thresholds',
        xLabel: 'Category',
        yLabel: 'BMI threshold',
        data: [
          { name: 'Overweight (WHO)', value: 25, color: C.warn },
          { name: 'Overweight (Asia)', value: 23, color: C.warn },
          { name: 'Obese (WHO)', value: 30, color: C.risk },
          { name: 'Obese (Asia)', value: 27.5, color: C.risk },
        ],
      },
    },
    understanding: {
      heading: 'Understanding Your BMI Result',
      paragraphs: [
        'A BMI between 18.5 and 24.9 generally indicates a healthy weight for adults of average build. Below 18.5 you are classified as underweight, which can point to undernutrition, an eating disorder, or simply a naturally small frame. Between 25 and 29.9 you are overweight, and 30 and above is the obese range, which is split into three classes because the health risks rise as the number climbs.',
        'A common mistake is treating BMI as a body-fat percentage. It is not. A bodybuilder might weigh in at a BMI of 29 with single-digit body fat, while a sedentary office worker can sit at 24 and still carry too much abdominal fat. Waist circumference, waist-to-height ratio, and a body-fat estimate all add useful context.',
        'The most practical use of BMI is as a trend line. A drift from 24 to 27 over two years is more meaningful than a single measurement, because it shows direction. Combine that trend with how you feel, how your clothes fit, and what your blood work looks like, and BMI becomes genuinely useful instead of just a label.',
      ],
    },
    faqs: [
      { question: 'Is BMI accurate for everyone?', answer: 'BMI works reasonably well for the general adult population aged about 20 to 65, but it is less reliable for athletes, pregnant women, the elderly and children. For these groups, body-fat percentage, waist circumference and clinical assessment give a more honest picture of health.' },
      { question: 'What is a healthy BMI for an adult?', answer: 'According to the World Health Organization, a BMI between 18.5 and 24.9 is considered healthy for most adults. In several Asian countries the upper limit is set lower, around 22.9, because metabolic risks tend to appear at slightly lower BMI values in Asian populations.' },
      { question: 'How is BMI different for men and women?', answer: 'The BMI formula itself does not change between men and women, so a 1.7 m person weighing 70 kg has a BMI of 24.2 regardless of sex. However, women naturally carry a higher percentage of body fat than men at the same BMI, which is one reason BMI alone should not be the only tool used to judge body composition.' },
      { question: 'Can I lower my BMI safely?', answer: 'A safe rate of weight loss is roughly 0.5 to 1 kg per week, achieved through a moderate calorie deficit and regular physical activity. Crash diets often lower BMI quickly but tend to rebound. Strength training also helps preserve muscle, which keeps your metabolism healthy as the number on the scale falls.' },
      { question: 'Why do Asian BMI standards differ from WHO?', answer: 'Research from China, Japan, India and other Asian countries has shown that diabetes, hypertension and cardiovascular disease appear at lower BMIs in these populations than in Europeans. Health bodies in the region therefore use a lower overweight threshold, typically 23, to flag risk earlier.' },
    ],
  },

  // ─────────────────────────────────────────────── AGE
  age: {
    whatIs: {
      heading: 'What is an Age Calculator?',
      paragraphs: [
        'An age calculator works out the precise gap between your date of birth and any other date, expressing the answer in years, months and days. It sounds straightforward, but age is one of those everyday ideas that turns out to be surprisingly cultural. Different societies have counted years in genuinely different ways for centuries, and a calculator that hides that complexity actually hides something important.',
        'The age system most Western countries use is simple: you start at zero, and your age increases by one on each birthday. By this rule a person who has lived for three years and eleven months is still three, and will turn four exactly one month later. This is the system you almost certainly grew up with if you were raised in Europe, the Americas or most of Africa.',
        'Other systems exist. In one of the traditional Chinese age systems a baby is born at age one, and everyone gets a year older together at Lunar New Year rather than on their personal birthday. The Korean traditional system worked similarly until 2023, when Korea officially adopted the international standard. Islamic ages are sometimes counted using the lunar Hijri calendar, which is about 11 days shorter per year, so a person can be a few months "older" in Hijri years than in Gregorian years.',
      ],
      chart: {
        type: 'bar',
        title: 'Average life expectancy by region',
        caption: 'Data source: WHO World Health Statistics 2024.',
        alt: 'Bar chart of average life expectancy at birth by world region',
        xLabel: 'Region',
        yLabel: 'Years',
        data: [
          { name: 'Africa', value: 64, color: C.info },
          { name: 'Americas', value: 76, color: C.info },
          { name: 'Europe', value: 78, color: C.info },
          { name: 'SE Asia', value: 71, color: C.info },
          { name: 'W Pacific', value: 78, color: C.info },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Age Correctly',
      paragraphs: [
        'The basic method is to subtract the day, month and year of birth from the day, month and year of the target date, then borrow across boundaries the way you would in long subtraction. If the day of the target month is smaller than the birth day, you borrow days from the previous month. If the month is smaller, you borrow a year. The result is age expressed as years, months and days.',
        'A common edge case appears with end-of-month dates. Take a person born on 31 January and the target date 1 March in a non-leap year. February only has 28 days, so depending on whether you count "complete months" or "calendar gap" you can get a difference of one month and one day, or one month and zero days. There is no single right answer; legal contracts often spell out which convention applies.',
        'Another classic puzzle is the leap-year birthday on 29 February. People born on this date legally celebrate their birthday on either 28 February or 1 March in non-leap years, depending on the country. In the United Kingdom they are considered a year older on 1 March, while in some U.S. states the rollover happens on 28 February.',
      ],
      chart: {
        type: 'bar',
        title: 'Edge case: 31 Jan to 31 Mar by counting method',
        caption: 'Two common conventions can produce different "months and days" answers for the same calendar gap.',
        alt: 'Comparison chart showing two age counting methods give different results for the same date range',
        xLabel: 'Counting method',
        yLabel: 'Days difference',
        data: [
          { name: 'Calendar months', value: 59, color: C.info },
          { name: 'Complete 30-day months', value: 60, color: C.warn },
        ],
      },
    },
    understanding: {
      heading: 'Understanding Your Age Result',
      paragraphs: [
        'When the calculator shows "32 years, 4 months, 12 days" the number to focus on first is the years figure, because almost every official process from voting to retirement uses completed years rather than partial ones. The months and days are mostly useful for personal milestones, anniversaries and gestational tracking.',
        'A common confusion is mixing "age in years" with "age next birthday." Insurance companies often quote premiums based on your age at your nearest birthday, so somebody who is 39 years and 8 months might be priced as a 40-year-old. Always check which definition a form is asking for.',
        'Another small but important detail is the time zone. If you were born in Tokyo and the calculator runs in New York, a result that lands on the day of your birthday can be a few hours off. For everyday use this does not matter, but for astrology, legal birth times and some genealogical work, the time zone of birth needs to be specified explicitly.',
      ],
    },
    faqs: [
      { question: 'How does an age calculator handle leap years?', answer: 'A good age calculator counts the actual number of days between two dates and lets the calendar do the rest, so leap years are absorbed automatically. People born on 29 February will see their age advance on either 28 February or 1 March in non-leap years, depending on the convention used in their country.' },
      { question: 'Why do Chinese and Korean ages sometimes seem one or two years higher?', answer: 'Several East Asian traditions counted a baby as one year old at birth and added another year at Lunar New Year rather than on the personal birthday. That is why a Western age of 30 could correspond to a traditional Chinese age of 31 or 32. Korea officially switched to the international standard in 2023.' },
      { question: 'How do I calculate age from date of birth in years and months?', answer: 'Subtract the birth year from the current year, then adjust by the months and days. If the current month and day come before your birth month and day, subtract one year and add the difference in months. Most online age calculators automate this and show full years, remaining months, and remaining days.' },
      { question: 'What is the difference between chronological age and biological age?', answer: 'Chronological age is the time that has passed since your birth, which is what an age calculator measures. Biological age tries to estimate how old your body actually behaves, using markers like cardiovascular fitness, blood markers and DNA methylation. Two people with the same chronological age can have noticeably different biological ages.' },
      { question: 'Is the age calculator accurate for legal purposes?', answer: 'For most legal questions in countries that use the Gregorian calendar, a standard age calculator is accurate. For matters involving non-Gregorian calendars, leap-day birthdays or insurance-style "age at nearest birthday," you should check the specific definition used by the institution requesting your age.' },
    ],
  },

  // ─────────────────────────────────────────────── FORCE
  force: {
    whatIs: {
      heading: 'What is a Force Calculator?',
      paragraphs: [
        'A force calculator applies one of the most famous equations in physics, Newton\'s second law, written as F = m × a. Force is measured in newtons (N), where one newton is defined as the force needed to accelerate a one-kilogram object at one metre per second squared. Sir Isaac Newton published this relationship in his 1687 book Principia Mathematica, and it has been the backbone of mechanics, engineering and aerospace ever since.',
        'The reason this calculator is useful is that it lets you swap any one of the three quantities for the other two. Civil engineers use it to estimate the wind load on a building, automotive engineers use it to size brake systems, and physics students use it for almost every introductory problem set. Once you understand the formula, the same equation explains the kick of a rifle and the launch thrust of a rocket.',
        'It is worth remembering that "force" in everyday language is not always the same as force in physics. People often use the word interchangeably with weight, push, or pressure. In physics those are three different ideas: weight is a specific kind of force caused by gravity, while pressure is force divided by area.',
      ],
      chart: {
        type: 'horizontalBar',
        title: 'Approximate force needed to accelerate everyday objects at 1 m/s²',
        caption: 'Calculated using F = m × a with typical mass values from manufacturer specifications.',
        alt: 'Bar chart of forces required to accelerate various objects according to Newton second law',
        xLabel: 'Force (N)',
        data: [
          { name: 'Smartphone (0.2 kg)', value: 0.2, color: C.info },
          { name: 'Bicycle (10 kg)', value: 10, color: C.info },
          { name: 'Adult human (70 kg)', value: 70, color: C.normal },
          { name: 'Small car (1500 kg)', value: 1500, color: C.warn },
          { name: 'Pickup truck (3000 kg)', value: 3000, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Force Step by Step',
      paragraphs: [
        'Start by identifying which two of the three quantities you know. If you know mass in kilograms and acceleration in metres per second squared, multiply them to get force in newtons. If you know force and mass, divide force by mass to get acceleration. If you know force and acceleration, divide force by acceleration to get mass. Always keep units in the SI system so that the answer comes out in newtons.',
        'A worked example: a 1,500 kg car accelerates from rest to 30 m/s in 10 seconds. The acceleration is 30 ÷ 10 = 3 m/s². The driving force is therefore 1,500 × 3 = 4,500 N, or about 1,012 lbf. A second example: a tennis ball of 0.058 kg is hit at 60 m/s after a 5 ms contact with the racket. Acceleration is 60 ÷ 0.005 = 12,000 m/s², so the average force on the ball is 0.058 × 12,000 = 696 N.',
        'A common confusion is the difference between mass and weight. Your bathroom scale measures weight, which is the gravitational force on your mass. On Earth, weight in newtons equals mass in kilograms multiplied by 9.81 m/s². On the Moon the same person weighs about one sixth as much, but their mass is identical because mass does not depend on gravity.',
      ],
      chart: {
        type: 'line',
        title: 'How acceleration scales with force at constant 10 kg mass',
        caption: 'Derived directly from F = m × a with mass held constant at 10 kg.',
        alt: 'Line chart showing acceleration increases linearly when force grows and mass stays the same',
        xLabel: 'Force (N)',
        yLabel: 'Acceleration (m/s²)',
        data: [
          { x: 0, value: 0 },
          { x: 20, value: 2 },
          { x: 40, value: 4 },
          { x: 60, value: 6 },
          { x: 80, value: 8 },
          { x: 100, value: 10 },
        ],
      },
    },
    understanding: {
      heading: 'Understanding Your Force Result',
      paragraphs: [
        'A result in newtons is most intuitive when you compare it to something familiar. Holding a 100 g chocolate bar in your hand corresponds to roughly 1 N of force. Lifting a 10 kg suitcase against gravity costs about 98 N. The thrust of a Boeing 747 engine at full power is around 280,000 N per engine, and a Saturn V first stage produced around 33 million newtons in total.',
        'A frequent mistake when reading force results is forgetting to account for direction. Force is a vector, which means a 100 N push to the right and a 100 N push to the left cancel exactly to zero net force. A force calculator usually returns magnitude only, so when several forces act on a body, you need to add them as vectors before the answer becomes physically meaningful.',
        'Borderline situations to watch for include very small accelerations on very large masses, where rounding can hide important friction or air-resistance terms, and very large accelerations on small masses, where the object might deform or break before the calculated force is fully transferred. In real engineering work, safety factors of 1.5 to 4 are usually applied on top of the textbook number.',
      ],
    },
    faqs: [
      { question: 'What is Newton\'s second law of motion?', answer: 'Newton\'s second law states that the net force acting on an object equals its mass multiplied by its acceleration, written as F = m × a. This compact equation links cause and effect in classical mechanics and underlies almost every problem in introductory physics.' },
      { question: 'What is the difference between mass and weight?', answer: 'Mass is the amount of matter in an object and is measured in kilograms, while weight is the gravitational force on that mass and is measured in newtons. Your mass stays the same whether you are on Earth, the Moon or in orbit, but your weight changes with the local gravitational acceleration.' },
      { question: 'How do you calculate force in pounds (lbf) instead of newtons?', answer: 'One pound-force equals about 4.448 newtons, so once you have a result in newtons you simply divide by 4.448 to convert to pounds-force. Many force calculators offer both units side by side, which is helpful in U.S. engineering practice where lbf is still common.' },
      { question: 'Why does a heavier object need more force to accelerate?', answer: 'Because force equals mass times acceleration, doubling the mass while keeping the desired acceleration the same exactly doubles the required force. That is why a fully loaded truck needs a far stronger engine and braking system than an empty one to achieve identical performance.' },
      { question: 'Can the force calculator be used for friction problems?', answer: 'You can use it for the net force needed to overcome friction, but you must first calculate the friction force separately using the coefficient of friction and the normal force. The force calculator only handles F = m × a directly; friction adds an extra term that you subtract from the applied force.' },
    ],
  },

  // ─────────────────────────────────────────────── PERCENTAGE
  percentage: {
    whatIs: {
      heading: 'What is a Percentage Calculator?',
      paragraphs: [
        'A percentage calculator finds, compares, or applies percentages quickly so you do not have to keep redoing the same arithmetic by hand. The word percent comes from the Latin per centum, meaning "by the hundred," and the symbol % is a stylised version of "100" written sideways. Italian merchants in the late Middle Ages popularised the idea because trading and taxation needed a simple way to talk about parts of a whole.',
        'Today percentages run through almost every part of daily life: tax rates, exam scores, store discounts, interest rates, election results, weather forecasts and battery indicators. A percentage calculator removes the friction from those tiny mental conversions, especially when more than one operation is chained together, like applying a 15% discount and then 8% sales tax on top.',
        'In some regions the comma is used instead of the dot as a decimal separator. A percentage written 7,5% in France means the same thing as 7.5% in the United States. This makes no difference to the math, but it can confuse anyone copying numbers across spreadsheets and websites.',
      ],
      chart: {
        type: 'pie',
        title: 'Common everyday percentages',
        caption: 'Representative values from typical household budgets in OECD countries.',
        alt: 'Pie chart showing the share of common everyday percentage uses such as tax, discount and tip',
        unit: '%',
        data: [
          { name: 'Sales tax', value: 8, color: C.warn },
          { name: 'Restaurant tip', value: 18, color: C.info },
          { name: 'Mortgage rate', value: 6, color: C.normal },
          { name: 'Sale discount', value: 25, color: C.pink },
          { name: 'Other', value: 43, color: C.muted },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Percentages',
      paragraphs: [
        'There are three operations that cover almost every percentage problem. To find X percent of a number, multiply the number by X and divide by 100. To find what percent A is of B, divide A by B and multiply by 100. To find the percentage change from old to new, subtract old from new, divide by old, and multiply by 100. Memorise those three patterns and you have covered roughly 95 percent of practical use cases.',
        'Two real examples show the power. If a 60-dollar shirt is on sale at 30 percent off, the discount is 60 × 30 ÷ 100 = 18 dollars, leaving you to pay 42 dollars. If your salary increased from 50,000 to 55,000 dollars, the percentage change is (55,000 − 50,000) ÷ 50,000 × 100 = 10 percent.',
        'A point that catches many people out is that percentage increases and decreases are not symmetrical. A 10 percent rise followed by a 10 percent fall does not bring you back to the original number. Starting at 100, a 10 percent rise gives 110, then a 10 percent fall gives 99. The same is true in reverse, which is why retailers can mark prices up and then advertise a discount that still leaves them ahead.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Percentage Result',
      paragraphs: [
        'A percentage result tells you a part of a whole, but it only makes sense when the "whole" is clear. Saying you scored 80 percent on a test only matters if everyone agrees on the maximum mark. Saying inflation was 5 percent only matters if you know whether the comparison is year-on-year, month-on-month or against a fixed base year.',
        'A common mistake is to add and subtract percentages of different bases. Adding a 15 percent service charge and a 10 percent tip on top of each other does not give 25 percent of the original bill, because the second percentage is usually applied to the new subtotal. Always check whether percentages compound or apply to the same base.',
        'Borderline values like 0 percent and 100 percent deserve a moment of thought. Zero percent of anything is zero, but 0 percent interest is sometimes hidden behind fees that effectively reintroduce a cost. One hundred percent means the full amount, and "more than 100 percent" only makes sense in growth contexts, not in shares of a fixed pie.',
      ],
    },
    faqs: [
      { question: 'How do I calculate what percent one number is of another?', answer: 'Divide the smaller (or part) number by the larger (or whole) number, then multiply by 100. For example, 30 out of 120 is 30 ÷ 120 × 100 = 25 percent. This is the formula behind most percentage calculator queries.' },
      { question: 'How do I calculate percentage increase or decrease?', answer: 'Subtract the original value from the new value, divide by the original value and multiply by 100. A positive answer is a percentage increase, a negative answer is a decrease. This same formula works for prices, salaries, populations and almost any other comparison.' },
      { question: 'Why does a 50 percent loss require a 100 percent gain to recover?', answer: 'If you start with 100 and lose 50 percent, you are left with 50. To get back to 100 from 50 you need to gain 50, and 50 out of 50 is 100 percent. This asymmetry is why investment losses are harder to claw back than equivalent gains.' },
      { question: 'How do you convert a percentage to a decimal or fraction?', answer: 'Divide the percent value by 100 to get a decimal: 25 percent becomes 0.25. To express it as a fraction, write the percent value over 100 and simplify: 25 percent equals 25/100, which simplifies to 1/4.' },
      { question: 'Can a percentage be more than 100?', answer: 'Yes, when you are talking about growth or comparison rather than a share of a fixed total. A revenue that doubles year on year has grown by 100 percent, and one that triples has grown by 200 percent. As a share of a single fixed pie, however, no slice can exceed 100 percent.' },
    ],
  },

  // ─────────────────────────────────────────────── SPEED
  speed: {
    whatIs: {
      heading: 'What is a Speed Calculator?',
      paragraphs: [
        'A speed calculator finds how fast something is moving by linking three quantities: distance covered, time taken and average speed. The relationship is so basic that it appears on the first page of almost every physics textbook, but it also drives logistics, sports analytics, marine navigation and aviation flight planning.',
        'The kilometre and the mile are still the dominant everyday units of distance, with km/h used in most of the world and mph used mainly in the United States, the United Kingdom and a handful of other countries. Speeds at sea and in the air are usually given in knots, where one knot equals one nautical mile per hour, or about 1.852 km/h.',
        'The distinction between speed and velocity is small but important. Speed is a scalar, just a number with a unit, while velocity also includes direction. A car going 60 km/h north and the same car going 60 km/h south have the same speed but opposite velocities, and that difference matters as soon as you start adding two motions together.',
      ],
      chart: {
        type: 'horizontalBar',
        title: 'Approximate speeds of familiar objects',
        caption: 'Representative cruise or top speeds; data compiled from manufacturer and physics references.',
        alt: 'Bar chart comparing speeds of everyday objects from walking up to the speed of light',
        xLabel: 'Speed (km/h)',
        data: [
          { name: 'Walking', value: 5, color: C.info },
          { name: 'City driving', value: 50, color: C.info },
          { name: 'Highway', value: 110, color: C.normal },
          { name: 'Airliner cruise', value: 900, color: C.warn },
          { name: 'Speed of sound', value: 1235, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Speed, Distance and Time',
      paragraphs: [
        'The base formula is speed = distance ÷ time. Rearrange it for the other two quantities and you get distance = speed × time and time = distance ÷ speed. To keep the units honest, make sure distance and time are in matching units before you divide; if distance is in kilometres and time in minutes, convert minutes to hours first or you will end up with a mixed-up result.',
        'A worked example: you drive 240 km and the trip takes 3 hours. Average speed is 240 ÷ 3 = 80 km/h. A second example: an aircraft cruises at 900 km/h for 2.5 hours. Distance covered is 900 × 2.5 = 2,250 km. These are average values, not instantaneous, which is the next subtlety.',
        'A common confusion is mixing average speed with instantaneous speed. If you cover the first 50 km at 100 km/h and the next 50 km at 50 km/h, the average is not 75 km/h but 66.7 km/h, because you spent more time on the slower section. Always compute average speed as total distance divided by total time, not as the arithmetic mean of two speeds.',
      ],
      chart: {
        type: 'line',
        title: 'Distance covered over time at three speeds',
        caption: 'Calculated using distance = speed × time for constant-speed motion.',
        alt: 'Line chart showing how distance grows over time at 30, 60 and 90 km per hour',
        xLabel: 'Time (h)',
        yLabel: 'Distance (km)',
        series: [
          { key: 's30', label: '30 km/h', color: C.info },
          { key: 's60', label: '60 km/h', color: C.normal },
          { key: 's90', label: '90 km/h', color: C.warn },
        ],
        data: [
          { x: 0, s30: 0, s60: 0, s90: 0 },
          { x: 1, s30: 30, s60: 60, s90: 90 },
          { x: 2, s30: 60, s60: 120, s90: 180 },
          { x: 3, s30: 90, s60: 180, s90: 270 },
          { x: 4, s30: 120, s60: 240, s90: 360 },
        ],
      },
    },
    understanding: {
      heading: 'Understanding Your Speed Result',
      paragraphs: [
        'When the calculator returns a speed in km/h or mph, sense-check it against your context. A "running" speed above 35 km/h is faster than the world record over 100 m, so if your number is in that zone you probably entered the time in the wrong unit. A car average above 120 km/h on a city trip almost always points to a missing stop or incorrect distance.',
        'A common mistake is forgetting to subtract stops. Driving apps show "moving average," which excludes time at red lights, and "overall average," which includes everything. The first is useful for planning fuel use, the second is what you actually feel when planning your day.',
        'Borderline cases include very long trips with refuelling stops, where overall average can drop by 20 to 30 percent compared with cruising speed, and very short trips where any small delay heavily skews the average. For sports and training, runners and cyclists usually report pace (minutes per kilometre) instead of speed, which is just the inverse of the same calculation.',
      ],
    },
    faqs: [
      { question: 'What is the speed formula in physics?', answer: 'The fundamental speed formula is speed equals distance divided by time, often written as v = d ÷ t. From this single equation you can derive distance equals speed multiplied by time, and time equals distance divided by speed.' },
      { question: 'How do I convert km/h to mph?', answer: 'Multiply km/h by 0.6214 to get mph, or divide by 1.609. So 100 km/h is about 62 mph, and 60 mph is about 96.6 km/h. A speed calculator usually shows both units side by side to avoid manual conversion.' },
      { question: 'What is the difference between speed and velocity?', answer: 'Speed is just how fast you are moving, expressed as a single number with a unit. Velocity adds direction, so a car going 50 km/h east has a different velocity from one going 50 km/h west even though their speeds are equal. Velocity is essential whenever you combine motions or use vector physics.' },
      { question: 'Why is average speed lower than my top speed?', answer: 'Average speed accounts for everything that happened during the trip, including acceleration, braking, traffic and stops. Top or instantaneous speed is only the highest reading at one moment. Total distance divided by total time always gives a number lower than the maximum reading on the speedometer.' },
      { question: 'How accurate is GPS-based speed measurement?', answer: 'Modern GPS receivers in phones and cars are accurate to within roughly 0.1 m/s, or about 0.4 km/h, under good sky conditions. Accuracy drops in tunnels, dense urban canyons and forests because the satellite signal is partially blocked, which is when the speed calculation can briefly jump or stall.' },
    ],
  },

  // ─────────────────────────────────────────────── BMR
  bmr: {
    whatIs: {
      heading: 'What is a BMR Calculator?',
      paragraphs: [
        'A BMR calculator estimates your basal metabolic rate, the amount of energy in calories your body burns at complete rest just to keep the lights on. The concept dates back to the early 20th century, when physiologists Harris and Benedict published the first widely used BMR equation in 1919 based on direct measurements of oxygen consumption. Their formula was refined in 1990 by Mifflin and St Jeor, whose equation is now considered the most accurate for the modern population.',
        'BMR matters because roughly 60 to 75 percent of the calories an average sedentary adult burns in a day are spent on basal functions: breathing, circulating blood, maintaining body temperature, repairing cells and running the brain. Knowing this floor figure is the starting point for any sensible calorie target, whether the goal is weight loss, muscle gain or simply maintenance.',
        'Cultural and individual factors matter. Studies have found that BMR can differ noticeably between ethnic groups, with some research suggesting that African American adults have a BMR several percent lower than white adults of the same height and weight. Cold-climate populations historically showed slightly higher BMRs because the body burned more calories defending core temperature.',
      ],
      chart: {
        type: 'bar',
        title: 'Approximate BMR by age group (men, 75 kg, 175 cm)',
        caption: 'Calculated with the Mifflin-St Jeor equation; values are in calories per day.',
        alt: 'Bar chart showing how basal metabolic rate declines with age in adult men',
        xLabel: 'Age band',
        yLabel: 'BMR (kcal/day)',
        data: [
          { name: '20–29', value: 1810, color: C.normal },
          { name: '30–39', value: 1760, color: C.normal },
          { name: '40–49', value: 1710, color: C.warn },
          { name: '50–59', value: 1660, color: C.warn },
          { name: '60–69', value: 1610, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate BMR',
      paragraphs: [
        'The Mifflin-St Jeor formula for men is BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5. For women it is the same except the final constant is −161 instead of +5. The result is the number of calories needed per day in a fully rested state, and it is the foundation for the more familiar TDEE figure.',
        'A worked example: a 35-year-old man, 178 cm, 80 kg, has a BMR of 10 × 80 + 6.25 × 178 − 5 × 35 + 5 = 800 + 1112.5 − 175 + 5 = 1742 kcal/day. A 28-year-old woman, 165 cm, 60 kg, has a BMR of 10 × 60 + 6.25 × 165 − 5 × 28 − 161 = 600 + 1031 − 140 − 161 = 1330 kcal/day.',
        'Edge cases to be aware of include very lean athletes, whose BMR is usually higher than the formula predicts because of their extra lean mass, and anyone on a long-term low-calorie diet, where the body adapts and BMR can fall by 10 to 15 percent. The Katch-McArdle equation, which uses lean body mass, is the better choice in those cases.',
      ],
    },
    understanding: {
      heading: 'Understanding Your BMR Result',
      paragraphs: [
        'A BMR of around 1,400 to 1,800 kcal is typical for adult women and 1,600 to 2,100 kcal for adult men, though there is a wide spread driven by height, age and body composition. To get the calories you actually burn in a day you multiply BMR by an activity factor between 1.2 (sedentary) and 1.9 (very active), which gives your total daily energy expenditure.',
        'A common mistake is to set a daily calorie target below BMR for sustained periods. Eating fewer calories than your basal rate forces the body into aggressive adaptation, slows metabolism and often backfires. A modest deficit of 300 to 500 kcal per day below TDEE is far more sustainable.',
        'Borderline situations include sudden large weight changes, illness, thyroid disorders and pregnancy. In each of these the formula loses accuracy and a clinical measurement using indirect calorimetry is the only way to know your true BMR.',
      ],
    },
    faqs: [
      { question: 'How accurate is the BMR calculator?', answer: 'The Mifflin-St Jeor formula is accurate to within roughly 10 percent for most healthy adults aged 19 to 78. It tends to underestimate BMR for very muscular people and overestimate it for those with high body-fat percentages.' },
      { question: 'Why does BMR decrease with age?', answer: 'After about age 30, adults lose roughly 3 to 8 percent of muscle mass per decade if they do not strength-train. Less muscle means fewer calories burned at rest, which is why BMR slowly declines and middle-age weight gain is so common at the same diet.' },
      { question: 'Is BMR the same as resting metabolic rate?', answer: 'They are very close but not identical. BMR is measured under strict conditions after an overnight fast and full rest, while resting metabolic rate (RMR) is measured under more relaxed conditions and tends to be 5 to 10 percent higher than BMR.' },
      { question: 'Can I increase my BMR?', answer: 'Yes, mainly by adding lean muscle through resistance training. Each kilogram of added muscle raises BMR by roughly 13 kcal per day. Eating enough protein and avoiding chronic under-eating also keep BMR from dropping.' },
      { question: 'Should I eat exactly my BMR in calories?', answer: 'No, BMR represents calories burned at complete rest, not while living a normal life. Use TDEE, which multiplies BMR by an activity factor, as your eating target and adjust based on whether your weight is moving the way you want.' },
    ],
  },

  // ─────────────────────────────────────────────── CALORIE
  calorie: {
    whatIs: {
      heading: 'What is a Calorie Calculator?',
      paragraphs: [
        'A calorie calculator estimates how much food energy your body needs in a typical day to maintain, lose or gain weight. The kilocalorie, the unit shown as "Calorie" with a capital C on food labels, was defined in the 19th century as the energy needed to raise one kilogram of water by one degree Celsius. Wilbur Atwater pioneered direct measurement of food energy in the 1890s, and modern calorie calculators are a digital descendant of his bomb-calorimeter experiments.',
        'The reason this tool matters is that body weight is, on average, governed by the law of energy balance. If you eat consistently more energy than you burn, you store the surplus, mostly as fat. Eat less and the body taps its reserves. The calorie calculator turns that abstract idea into a daily number you can act on.',
        'Calorie needs vary widely by culture and lifestyle. A subsistence farmer in rural Ethiopia may burn 3,500 kcal a day, while an office worker in Tokyo may need only 1,900. The figure your calculator returns is a starting estimate based on age, sex, height, weight and activity, not a fixed quota.',
      ],
      chart: {
        type: 'horizontalBar',
        title: 'Average daily calorie needs (USDA reference, moderate activity)',
        caption: 'Data source: USDA Dietary Guidelines for Americans 2020-2025.',
        alt: 'Bar chart of daily calorie needs by age group and gender from USDA dietary guidelines',
        xLabel: 'kcal/day',
        data: [
          { name: 'Women 19–30', value: 2200, color: C.info },
          { name: 'Women 31–50', value: 2000, color: C.info },
          { name: 'Women 51+', value: 1800, color: C.info },
          { name: 'Men 19–30', value: 2800, color: C.normal },
          { name: 'Men 31–50', value: 2600, color: C.normal },
          { name: 'Men 51+', value: 2400, color: C.normal },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Daily Calorie Needs',
      paragraphs: [
        'The standard method has two steps. First compute BMR with the Mifflin-St Jeor formula, then multiply by an activity factor: 1.2 for sedentary, 1.375 for light activity, 1.55 for moderate, 1.725 for high and 1.9 for very high activity. The product is your TDEE in calories per day, which is roughly what you need to maintain weight.',
        'A worked example: a 30-year-old man, 175 cm, 78 kg, moderately active, has a BMR of about 1,720 kcal. Multiply by 1.55 and you get a maintenance figure of about 2,666 kcal/day. To lose roughly 0.5 kg per week he would aim for around 2,166 kcal, a 500 kcal deficit.',
        'A common confusion is that food labels in Europe show energy in both kilojoules and kilocalories. One kcal equals 4.184 kJ. Another regional twist is that the United States rounds calorie content to the nearest 5 or 10 kcal on labels, while EU rules require kilojoules to be shown first.',
      ],
      chart: {
        type: 'pie',
        title: 'Recommended macronutrient split',
        caption: 'Data source: Acceptable Macronutrient Distribution Ranges, U.S. Institute of Medicine.',
        alt: 'Pie chart of recommended daily macronutrient ratios for protein carbohydrates and fats',
        unit: '%',
        data: [
          { name: 'Carbs', value: 50, color: C.info },
          { name: 'Fat', value: 30, color: C.warn },
          { name: 'Protein', value: 20, color: C.normal },
        ],
      },
    },
    understanding: {
      heading: 'Understanding Your Calorie Result',
      paragraphs: [
        'The result is best treated as a daily average over a week, not a strict target for every meal. Real eating patterns fluctuate and the body cares about the rolling average. A safe loss rate is 0.5 to 1 kg per week, which corresponds to a 500 to 1,000 kcal daily deficit.',
        'A common mistake is cutting calories too aggressively. Below about 1,200 kcal for women and 1,500 for men, it is hard to meet vitamin and mineral needs and the body may slow metabolism in response. Slow and consistent almost always beats fast and brittle.',
        'Borderline situations include endurance athletes, who can burn 4,000 to 6,000 kcal during long training days, and people recovering from illness or surgery, whose needs can rise by 20 to 50 percent above the textbook number. In these cases a registered dietitian is the right partner.',
      ],
    },
    faqs: [
      { question: 'How many calories should I eat to lose weight?', answer: 'A daily deficit of about 500 kcal below your maintenance calories typically produces a loss of around 0.5 kg per week. Going below 1,200 kcal for women or 1,500 kcal for men is rarely advisable without professional supervision.' },
      { question: 'Are all calories created equal?', answer: 'A calorie is a unit of energy and the laws of thermodynamics apply equally to fat, carbs and protein. In practice, however, protein is more satiating, takes more energy to digest, and helps preserve muscle, so the source of calories does affect body composition over time.' },
      { question: 'Why do people of the same weight burn different calories?', answer: 'Daily energy expenditure depends on lean muscle mass, age, sex, hormonal status, activity level and even genetics. Two people at 70 kg can have maintenance needs that differ by several hundred calories per day for these reasons.' },
      { question: 'Do I need to count calories every day?', answer: 'Most people do well to count carefully for a few weeks to learn portion sizes, then switch to a simpler routine of weighing in regularly and adjusting portions. Long-term obsessive tracking is rarely needed and can cause unnecessary stress.' },
      { question: 'How accurate are calorie counts on food labels?', answer: 'U.S. and EU regulations allow up to about 20 percent variance from the printed value, so counts are guidelines rather than exact measurements. Restaurant meals are often even less precise, which is why home cooking helps when you need tight control.' },
    ],
  },

  // ─────────────────────────────────────────────── IDEAL WEIGHT
  'ideal-weight': {
    whatIs: {
      heading: 'What is an Ideal Weight Calculator?',
      paragraphs: [
        'An ideal weight calculator estimates the body weight associated with the lowest health risks for a person of a given height, sex and frame size. The first widely used formula was published by Dr. P.P. Broca, a French surgeon, in 1871. Several updates followed, the best known being the 1974 G.J. Hamwi formula, originally created to dose medications in patients of varying size, and the 1983 Robinson formula used in clinical pharmacy.',
        'In real life "ideal" is not a single number. Modern medicine treats ideal weight as a range rather than a target, because the relationship between weight and mortality is U-shaped: very low and very high weights both raise risk, while a wide middle band is similar enough to call neutral. The calculator gives you the centre of that band.',
        'Cultural differences matter. Many South Asian and East Asian health systems use lower thresholds than the WHO standards because metabolic disease appears at lower body weights in these populations. A figure that looks "normal" by a Western chart can sit in a higher-risk band by the regional one.',
      ],
      chart: {
        type: 'bar',
        title: 'Ideal weight estimates for a 175 cm adult by formula',
        caption: 'Data source: Devine, Robinson, Miller and Hamwi clinical formulas.',
        alt: 'Bar chart comparing ideal body weight estimates from four classical clinical formulas',
        xLabel: 'Formula',
        yLabel: 'Weight (kg)',
        data: [
          { name: 'Devine (M)', value: 72.6, color: C.info },
          { name: 'Robinson (M)', value: 71.5, color: C.info },
          { name: 'Miller (M)', value: 70.6, color: C.info },
          { name: 'Hamwi (M)', value: 75.0, color: C.normal },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Ideal Body Weight',
      paragraphs: [
        'The Devine formula, used in many U.S. hospitals, says ideal weight in kilograms equals 50 + 2.3 × (height in inches over 5 feet) for men, and 45.5 + 2.3 for women. The Robinson formula uses 52 + 1.9 and 49 + 1.7 respectively. A simpler rule of thumb is to take a BMI of 22 and multiply by height in metres squared, which gives a midpoint of the WHO healthy range.',
        'Worked example: a 178 cm man is 70 inches tall, 10 inches over 5 feet. Devine gives 50 + 2.3 × 10 = 73 kg. The BMI-22 method gives 22 × 1.78² = 69.7 kg. Both answers are reasonable estimates of where his weight is most likely to support good health.',
        'A frequent confusion is mixing "ideal weight" with "goal weight." Athletes commonly carry more lean mass than the formulas predict, so their ideal-weight figure understates a healthy weight. Conversely, someone with high body-fat percentage can sit on an "ideal" figure that still hides excess fat.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Ideal Weight Result',
      paragraphs: [
        'Use the result as a midpoint of a range that spans roughly 4 to 6 kg in either direction. Living within this band is generally associated with the lowest risks of cardiovascular disease and type 2 diabetes for most adults.',
        'A common mistake is to chase the exact figure as if it were a finish line. Body weight varies by 1 to 2 kg through the day from food, water and glycogen, so anchoring on a single number invites frustration. Trends across weeks matter much more than the daily reading.',
        'Borderline situations include pregnancy, body-builders, the elderly and children, where these formulas were never intended to apply. For those groups, condition-specific guidelines and clinician input are the right tools.',
      ],
    },
    faqs: [
      { question: 'Which ideal weight formula is most accurate?', answer: 'No single formula is universally best because each was calibrated on a different population. The Robinson and Miller formulas tend to give slightly lower numbers than Devine and Hamwi, and using the average of all four is a sensible practical approach.' },
      { question: 'Is ideal weight the same as healthy weight?', answer: 'They are closely related but not identical. Ideal weight is a single estimate, while healthy weight is a range, usually defined by BMI 18.5 to 24.9. Most people sit comfortably anywhere within that range without measurable difference in risk.' },
      { question: 'Does ideal weight change with age?', answer: 'Most clinical formulas do not adjust for age, but research suggests that a slightly higher body weight is protective in adults over 65, particularly through preserving muscle mass. Older adults should not chase the same number that suited them at 25.' },
      { question: 'How does body frame affect ideal weight?', answer: 'A larger frame can carry several extra kilograms without health penalty. Wrist or elbow breadth is sometimes used to classify small, medium or large frames, and ideal weight is shifted up or down by about 10 percent accordingly.' },
      { question: 'Should I try to reach my exact ideal weight?', answer: 'A more useful target is to land anywhere in the healthy BMI range with a body composition you are comfortable with. Health markers like blood pressure, lipids and waist size matter more than hitting a specific scale figure.' },
    ],
  },

  // ─────────────────────────────────────────────── BODY FAT
  'body-fat': {
    whatIs: {
      heading: 'What is a Body Fat Calculator?',
      paragraphs: [
        'A body fat calculator estimates the share of your total body weight that is fat tissue rather than muscle, bone, water and organs. The most popular tape-measure method was developed in the early 1980s by researchers at the U.S. Naval Health Research Center as a low-cost alternative to skinfold callipers and hydrostatic weighing for screening sailors.',
        'Body fat percentage matters because two people at the same weight can have very different metabolic risks depending on how much of that weight is fat and where it is stored. Visceral fat around the abdomen is far more strongly linked to heart disease and diabetes than fat under the skin on the hips and thighs.',
        'Recommended ranges differ by sex and age. The American Council on Exercise puts essential fat at 10 to 13 percent for women and 2 to 5 percent for men, with athletic ranges around 14 to 20 percent and 6 to 13 percent respectively. South Asian populations are flagged at lower percentages because their fat distribution skews more visceral.',
      ],
      chart: {
        type: 'bar',
        title: 'ACE body-fat ranges (%)',
        caption: 'Data source: American Council on Exercise body composition guidelines.',
        alt: 'Bar chart of healthy body fat percentage ranges by category for men and women',
        xLabel: 'Category',
        yLabel: 'Body fat %',
        data: [
          { name: 'Athletes (W)', value: 17, color: C.normal },
          { name: 'Fitness (W)', value: 24, color: C.info },
          { name: 'Average (W)', value: 30, color: C.warn },
          { name: 'Athletes (M)', value: 9, color: C.normal },
          { name: 'Fitness (M)', value: 15, color: C.info },
          { name: 'Average (M)', value: 22, color: C.warn },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Body Fat with the U.S. Navy Method',
      paragraphs: [
        'For men the formula is BF% = 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76, with all measurements in inches. For women the formula adds the hip measurement: BF% = 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387. These equations were validated against hydrostatic weighing on hundreds of service members.',
        'A worked example: a man with a 175 cm height (68.9 in), 90 cm waist (35.4 in) and 38 cm neck (15 in) gets BF% = 86.010 × log10(35.4 − 15) − 70.041 × log10(68.9) + 36.76 ≈ 16.5 percent. The same calculation for a woman uses three measurements and the second formula above.',
        'A common edge case is bloating, large meals or menstrual water retention, all of which expand the waist measurement and inflate the result by 1 to 3 percent. Always measure first thing in the morning, after using the bathroom, and use the average of three measurements rather than a single reading.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Body Fat Result',
      paragraphs: [
        'A useful rule of thumb is that the Navy formula tends to be accurate to within ±3 percent body fat for most adults, which is similar to skinfold callipers in the hands of a non-expert. Bioelectrical impedance scales tend to be less accurate again because they depend heavily on hydration.',
        'A common mistake is reading body-fat percentage as a fitness score. Two people at 18 percent body fat can have very different muscle masses and very different physiques. Pair the percentage with weight and waist circumference for a complete picture.',
        'Borderline values include essential-fat ranges (below 5 percent for men and 13 percent for women), which are sustainable only briefly for competition and carry hormonal risks if held long-term. Anything above 32 percent for men or 40 percent for women is classified as obese by the World Health Organization.',
      ],
    },
    faqs: [
      { question: 'How accurate is the U.S. Navy body fat method?', answer: 'It is accurate to about ±3 percent for the general adult population when measurements are taken correctly. DEXA scans and underwater weighing are more accurate but require specialised equipment.' },
      { question: 'What is a healthy body fat percentage?', answer: 'For most adult women a healthy range is 21 to 32 percent, and for men it is 14 to 24 percent. These ranges shift slightly higher with age because some fat gain after 50 is normal and even mildly protective.' },
      { question: 'How can I lower my body fat percentage?', answer: 'A modest calorie deficit, regular resistance training to preserve muscle, adequate protein and consistent sleep are the four most evidence-based levers. Quick-fix programmes that promise large drops in weeks usually trade muscle for short-term scale gains.' },
      { question: 'Is the Navy method accurate for women?', answer: 'It works reasonably well for most women but is less accurate at the extremes of body fat. Hip and waist measurements should be taken with a non-stretch tape at the levels specified by the Navy protocol for the formula to apply correctly.' },
      { question: 'Why do bathroom impedance scales give different numbers?', answer: 'Impedance scales send a small current through the body and infer fat from electrical resistance. The reading can shift by several percent depending on hydration, recent exercise and even foot moisture, which is why morning readings on an empty stomach are most consistent.' },
    ],
  },

  // ─────────────────────────────────────────────── WATER INTAKE
  'water-intake': {
    whatIs: {
      heading: 'What is a Water Intake Calculator?',
      paragraphs: [
        'A water intake calculator estimates how much fluid your body is likely to need each day based on weight, activity level and climate. The familiar "eight glasses a day" rule has surprisingly weak scientific support; it is often traced back to a 1945 U.S. Food and Nutrition Board recommendation of about 2.5 litres a day for the average adult, which crucially included water already present in food.',
        'Water matters because the body is roughly 60 percent water by weight, and even mild dehydration of 1 to 2 percent is enough to reduce concentration, slow reaction time and raise heart rate during exercise. Most people in temperate climates rarely become seriously dehydrated, but small daily shortfalls do show up in mood, energy and headaches.',
        'Cultural patterns vary dramatically. Large parts of East Asia favour warm tea throughout the day, which counts as fluid intake. In Mediterranean climates, water-rich foods like watermelon, tomatoes and citrus contribute hundreds of millilitres to total intake. The calculator therefore gives you a target, not a quota of plain water.',
      ],
      chart: {
        type: 'horizontalBar',
        title: 'EFSA daily total water reference values',
        caption: 'Data source: European Food Safety Authority Scientific Opinion on dietary reference values for water.',
        alt: 'Bar chart of daily total water intake recommendations for adults from EFSA',
        xLabel: 'Litres per day',
        data: [
          { name: 'Women', value: 2.0, color: C.info },
          { name: 'Men', value: 2.5, color: C.info },
          { name: 'Pregnant', value: 2.3, color: C.warn },
          { name: 'Lactating', value: 2.7, color: C.warn },
        ],
      },
    },
    howTo: {
      heading: 'How to Estimate Daily Water Needs',
      paragraphs: [
        'A common formula is 30 to 35 ml of total water per kilogram of body weight per day for adults, with about 20 percent of that coming from food and the rest from drinks. So a 70 kg adult needs around 2,100 to 2,450 ml total water and roughly 1,700 to 2,000 ml from beverages.',
        'A worked example: a 80 kg construction worker on a hot day starts at 80 × 35 = 2,800 ml total and adds about 500 ml per hour of heavy sweating, ending the day on 4,300 ml or more. A sedentary 60 kg office worker in a cool climate is well served by about 1,800 ml of fluids.',
        'A common confusion is whether coffee, tea and beer count. Modern reviews show that caffeinated drinks in habitual users contribute almost as much to hydration as water, while alcoholic drinks above about 4 percent ABV cause a net fluid loss. Pure water is simply the most predictable option.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Water Intake Result',
      paragraphs: [
        'The simplest indicator that you are well hydrated is the colour of your urine: pale straw is ideal, dark yellow is a sign you are running short. Headaches, dry mouth and a notable dip in afternoon energy can also be early symptoms of mild dehydration.',
        'A common mistake is forcing very large volumes of plain water in short periods, which can dilute blood sodium and, in rare cases, cause hyponatraemia. Marathon runners have died from drinking too much water during long events.',
        'Borderline situations include athletes losing more than a litre of sweat per hour, anyone with kidney disease, and very elderly adults who lose the thirst signal. In these cases, intake should be planned with a clinician.',
      ],
    },
    faqs: [
      { question: 'Do I really need 8 glasses of water a day?', answer: 'The 8x8 rule is a memorable estimate, not a scientific requirement. Most adults do well on 2 to 2.5 litres of total water per day from drinks and food combined, which works out to about 6 to 8 standard glasses of fluid.' },
      { question: 'Does coffee count toward water intake?', answer: 'Yes. Modern research shows that caffeinated drinks in habitual coffee or tea drinkers hydrate almost as effectively as water. Only very high single doses of caffeine cause a measurable diuretic effect.' },
      { question: 'How can I tell if I am dehydrated?', answer: 'The simplest signs are dark urine, dry mouth, headache, dizziness on standing and reduced urine frequency. By the time you feel thirsty you are usually about one percent dehydrated.' },
      { question: 'How much water should athletes drink?', answer: 'During endurance exercise athletes can lose 0.5 to 2 litres of sweat per hour. A practical guide is to weigh in before and after sessions and replace each lost kilogram with about 1.2 to 1.5 litres of fluid.' },
      { question: 'Can you drink too much water?', answer: 'Yes. Drinking several litres of plain water in a few hours can lower blood sodium and cause hyponatraemia, which is dangerous. Spread intake through the day and add electrolytes during long endurance events.' },
    ],
  },

  // ─────────────────────────────────────────────── TDEE
  tdee: {
    whatIs: {
      heading: 'What is a TDEE Calculator?',
      paragraphs: [
        'A TDEE calculator estimates your total daily energy expenditure, which is the sum of every calorie you burn in 24 hours: basal metabolism, the thermic effect of food, planned exercise and the often-overlooked non-exercise activity thermogenesis (NEAT). The concept of NEAT was popularised by the Mayo Clinic researcher James Levine in the early 2000s, who showed it could differ by more than 2,000 kcal a day between individuals.',
        'TDEE matters because it is the single most useful number for setting calorie targets. Eat around your TDEE and weight stays steady; sit a few hundred calories below it and you lose weight; add a similar surplus and you gain. Almost every modern fitness app is, at its core, a TDEE calculator with a tracker bolted on.',
        'Activity-level multipliers have a regional history. The Harris-Benedict 1.2-to-1.9 scale was created in the United States, but European nutrition bodies sometimes use slightly different breakpoints, and the FAO/WHO 1985 report defines categories by occupation, with rural agricultural work classed at 2.0 to 2.4 times BMR.',
      ],
      chart: {
        type: 'bar',
        title: 'Activity multipliers used in common TDEE formulas',
        caption: 'Data source: Harris-Benedict and Mifflin-St Jeor activity factor conventions.',
        alt: 'Bar chart of activity multipliers used to scale BMR into TDEE',
        xLabel: 'Activity level',
        yLabel: 'Multiplier',
        data: [
          { name: 'Sedentary', value: 1.2, color: C.info },
          { name: 'Light', value: 1.375, color: C.normal },
          { name: 'Moderate', value: 1.55, color: C.normal },
          { name: 'High', value: 1.725, color: C.warn },
          { name: 'Very high', value: 1.9, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate TDEE',
      paragraphs: [
        'Compute BMR with the Mifflin-St Jeor formula and multiply by the activity factor that best matches your week. Sedentary (1.2) means a desk job and almost no formal exercise. Light (1.375) means light exercise one to three days a week. Moderate (1.55) is three to five sessions a week, high (1.725) is six or seven, and very high (1.9) means heavy physical work or twice-daily training.',
        'A worked example: a 27-year-old woman, 168 cm, 62 kg, light activity, has a BMR of about 1,400 kcal. TDEE = 1,400 × 1.375 ≈ 1,925 kcal. To lose roughly 0.5 kg per week she would aim for about 1,425 kcal per day.',
        'A common error is choosing too high an activity factor. Many people who go to the gym three times a week but spend the rest of the day seated are closer to "light" than "moderate." When in doubt, pick the lower factor and adjust based on actual weight change after two to four weeks.',
      ],
    },
    understanding: {
      heading: 'Understanding Your TDEE Result',
      paragraphs: [
        'The most useful way to use TDEE is as the centre of a feedback loop. Set a calorie intake based on the figure, weigh yourself daily and average the results weekly, and adjust intake by 10 to 15 percent up or down depending on whether your weight is moving the way you want.',
        'A common mistake is assuming TDEE is fixed. It can drift by 200 kcal or more depending on stress, sleep and activity changes. Many "weight loss plateaus" are simply a TDEE that has fallen as the body adapted to a smaller frame and a more efficient routine.',
        'Borderline cases include shift workers, whose disturbed circadian rhythm can affect both basal metabolism and appetite, and adolescents, who have higher energy needs per kilogram than adults of the same body weight.',
      ],
    },
    faqs: [
      { question: 'What is the difference between BMR and TDEE?', answer: 'BMR is the energy your body uses at complete rest, while TDEE adds the calories burned by digestion, daily movement and exercise. TDEE is always higher and is the more useful figure for setting eating targets.' },
      { question: 'How do I use TDEE for weight loss?', answer: 'Aim to eat about 500 kcal below your TDEE for a loss of around 0.5 kg per week. Measure your weight weekly and adjust the deficit if progress stalls or the loss is too rapid.' },
      { question: 'Why does my TDEE seem to drop over time?', answer: 'As you lose weight, both BMR and the energy cost of moving fall, and the body becomes more efficient at the same routine. After several months of dieting, TDEE can be 10 to 20 percent lower than the formula predicts, requiring smaller portions or more activity.' },
      { question: 'Should I add exercise calories on top of TDEE?', answer: 'Only if you used a sedentary multiplier and now want to add a workout. If you already chose an activity factor that includes exercise, adding tracked workout calories on top will double-count and inflate intake.' },
      { question: 'How often should I recalculate my TDEE?', answer: 'Recalculate any time your weight, activity level or routine changes meaningfully, typically every 5 kg of weight change or whenever you change job or training pattern.' },
    ],
  },

  // ─────────────────────────────────────────────── EMI
  emi: {
    whatIs: {
      heading: 'What is an EMI Calculator?',
      paragraphs: [
        'An EMI calculator works out the equated monthly instalment a borrower has to pay for a fixed-rate loan such as a home, car or personal loan. EMI as a concept took off in India in the 1990s when retail lending exploded, but the underlying math is the standard amortisation formula used by banks worldwide since the 19th century.',
        'EMI matters because it converts a complex schedule of interest and principal into a single, predictable monthly figure. That predictability is what allows households to budget around a mortgage and what allows banks to model their cash flows years ahead.',
        'Naming differs by region. Indian and South Asian banks call it EMI; U.S. lenders simply call it the monthly payment; Australian lenders use "monthly repayment." Whatever the label, the formula is identical and the calculator answers the same question: how much will I owe each month?',
      ],
      chart: {
        type: 'donut',
        title: 'Principal vs interest over the life of a 20-year loan at 8%',
        caption: 'Computed for a $200,000 loan; figures are illustrative.',
        alt: 'Donut chart showing share of principal versus interest paid over a 20 year loan',
        unit: '',
        data: [
          { name: 'Principal', value: 200000, color: C.info },
          { name: 'Interest', value: 201555, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate EMI',
      paragraphs: [
        'The formula is EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1), where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12 ÷ 100) and n is the number of monthly instalments. The same formula appears in mortgage spreadsheets in every country and is built into every business calculator.',
        'A worked example: borrow $200,000 at 8 percent for 20 years. The monthly rate is 0.08 ÷ 12 = 0.00667 and n = 240. Plugging in gives an EMI of about $1,673 a month. Total paid over 20 years is roughly $401,500, of which about $201,500 is interest.',
        'A common confusion is the difference between flat-rate and reducing-balance interest. With reducing-balance interest each EMI pays off some of the principal so future interest is lower; with flat-rate interest the cost is calculated on the original principal for the full term, which makes the headline rate look smaller than the effective one.',
      ],
      chart: {
        type: 'line',
        title: 'Monthly EMI vs interest rate for a 20-year, $200k loan',
        caption: 'Calculated using the standard amortisation formula.',
        alt: 'Line chart showing how monthly EMI rises with the interest rate on a fixed loan',
        xLabel: 'Interest rate (%)',
        yLabel: 'EMI ($)',
        data: [
          { x: 5, value: 1320 },
          { x: 6, value: 1432 },
          { x: 7, value: 1551 },
          { x: 8, value: 1673 },
          { x: 9, value: 1800 },
          { x: 10, value: 1930 },
        ],
      },
    },
    understanding: {
      heading: 'Understanding Your EMI Result',
      paragraphs: [
        'The EMI is split between interest and principal in a ratio that changes over time. In the early years most of each instalment goes to interest; toward the end most goes to principal. This is why making a few extra principal payments early in the loan saves disproportionately on total interest.',
        'A common mistake is comparing two loans on EMI alone. A longer tenure produces a smaller monthly figure but a much larger total interest bill. Always compare both EMI and total cost of credit before signing.',
        'Borderline situations include floating-rate loans, where the EMI either changes with rate moves or, more commonly, the tenure stretches while the EMI stays fixed. In high-rate environments this can extend a 20-year loan to 25 or even 30 years without warning.',
      ],
    },
    faqs: [
      { question: 'What is the formula for EMI?', answer: 'EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1), where P is principal, r is monthly interest rate as a decimal and n is number of months. This is the standard reducing-balance formula used by banks worldwide.' },
      { question: 'How can I reduce my EMI?', answer: 'You can lower EMI by extending the loan tenure, putting down a larger initial payment, refinancing to a lower interest rate or making lump-sum prepayments that reduce the outstanding principal.' },
      { question: 'Is it better to prepay or invest the money?', answer: 'It depends on the loan rate compared with your expected after-tax investment return. If your loan rate is higher than what you can reliably earn elsewhere, prepayment usually wins.' },
      { question: 'Why does the early EMI mostly pay interest?', answer: 'In a reducing-balance loan, interest is charged on the outstanding principal. At the start the principal is at its largest, so the interest portion of each EMI is the largest, and the principal portion grows as the balance shrinks.' },
      { question: 'Does EMI change if interest rates rise?', answer: 'For a fixed-rate loan the EMI never changes. For a floating-rate loan, banks usually keep the EMI steady and stretch the tenure, but they can also raise the EMI directly if the tenure is already at its maximum.' },
    ],
  },

  // ─────────────────────────────────────────────── LOAN
  loan: {
    whatIs: {
      heading: 'What is a Loan Calculator?',
      paragraphs: [
        'A loan calculator estimates the monthly payment, total interest and amortisation schedule for any fixed-rate instalment loan, whether for a car, a personal need or a home. Amortisation in the modern sense was first formalised in the 17th and 18th centuries by European insurers and bond issuers, and it has been the standard way to structure consumer loans since the post-war housing booms in the United States and United Kingdom.',
        'A loan calculator matters because the headline interest rate alone is rarely enough to compare offers. Two loans at the same rate can produce very different monthly payments and total costs depending on tenure, fees and compounding period. The calculator turns those moving parts into one number per scenario.',
        'Lending conventions differ across borders. U.S. mortgages traditionally compound interest monthly, Canadian mortgages compound semi-annually but pay monthly, and many European personal loans quote an APR that bundles in fees. A loan calculator that knows your local convention is worth more than one that does not.',
      ],
      chart: {
        type: 'bar',
        title: 'Monthly payment for a $25,000 5-year loan at different rates',
        caption: 'Standard amortisation; compares typical auto-loan rates.',
        alt: 'Bar chart of monthly loan payments at different interest rates for a five year loan',
        xLabel: 'Interest rate',
        yLabel: 'Monthly payment ($)',
        data: [
          { name: '4%', value: 460, color: C.normal },
          { name: '6%', value: 483, color: C.normal },
          { name: '8%', value: 507, color: C.warn },
          { name: '10%', value: 531, color: C.warn },
          { name: '12%', value: 556, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate a Loan Payment',
      paragraphs: [
        'Use the same amortisation formula as for EMI: M = P × r × (1+r)ⁿ ÷ ((1+r)ⁿ − 1), where P is principal, r is the periodic interest rate and n is the number of payments. To get the total cost of credit, multiply M by n and subtract P; what remains is the interest you will pay over the life of the loan.',
        'A worked example: a $25,000 car loan over five years at 7 percent has a monthly payment of about $495 and a total interest of roughly $4,700. Push the term out to seven years and the monthly payment drops to $377 but total interest jumps to about $6,668.',
        'A common confusion is between APR and the simple interest rate. APR includes mandatory fees and reflects the true annual cost of borrowing, while the headline rate excludes them. Lenders sometimes quote whichever number looks more attractive, which is why comparing on APR is the safer practice.',
      ],
      chart: {
        type: 'line',
        title: 'Remaining balance over a 10-year loan at 7%',
        caption: 'Amortisation curve for a hypothetical $50,000 loan.',
        alt: 'Line chart showing the remaining loan balance over time on a ten year amortising loan',
        xLabel: 'Year',
        yLabel: 'Balance ($)',
        data: [
          { x: 0, value: 50000 },
          { x: 2, value: 42000 },
          { x: 4, value: 33000 },
          { x: 6, value: 23000 },
          { x: 8, value: 12000 },
          { x: 10, value: 0 },
        ],
      },
    },
    understanding: {
      heading: 'Understanding Your Loan Result',
      paragraphs: [
        'Look at three numbers together: monthly payment, total interest and total amount paid. The monthly payment tells you whether the loan fits your budget. The total interest tells you what borrowing actually costs you. The total amount paid is the sum your future self hands over.',
        'A common mistake is to optimise only for the lowest monthly payment by taking the longest tenure available. That choice often doubles or triples the lifetime interest and leaves you in negative equity on assets like cars that depreciate faster than the balance falls.',
        'Borderline situations include balloon loans, where most of the principal is due at the end, and interest-only loans, where the balance never falls during the interest-only window. Both products have legitimate uses but require careful planning to avoid surprises.',
      ],
    },
    faqs: [
      { question: 'How do I calculate monthly loan payments?', answer: 'Use the standard amortisation formula M = P × r × (1+r)ⁿ ÷ ((1+r)ⁿ − 1), or simply enter principal, interest rate and tenure into a loan calculator. The result tells you what you will pay each month for the life of the loan.' },
      { question: 'Should I take a longer or shorter loan term?', answer: 'A shorter term means higher monthly payments but much less total interest. A longer term lowers the monthly payment but increases the total cost. Pick the shortest term you can comfortably afford.' },
      { question: 'What is the difference between secured and unsecured loans?', answer: 'A secured loan is backed by collateral such as a car or property, which lets the lender offer a lower rate. An unsecured loan has no collateral, so the lender charges a higher rate to compensate for the added risk.' },
      { question: 'How does prepayment affect the loan?', answer: 'Each prepayment reduces the outstanding principal, which lowers all future interest charges. The earlier you prepay, the larger the saving, since most early instalments are mostly interest.' },
      { question: 'What credit score do I need for a low loan rate?', answer: 'In the United States, a FICO score above 740 typically unlocks the best advertised rates, while scores below 620 either attract very high rates or lead to refusal. Other countries use different scoring systems but apply the same general principle.' },
    ],
  },

  // ─────────────────────────────────────────────── MORTGAGE
  mortgage: {
    whatIs: {
      heading: 'What is a Mortgage Calculator?',
      paragraphs: [
        'A mortgage calculator estimates the monthly payment for a home loan, including principal and interest, and often property taxes and insurance. The mortgage in its modern amortising form became standard in the United States after the 1934 National Housing Act, which created the FHA and the 30-year fixed-rate mortgage that still dominates American home finance.',
        'Mortgages matter because, for most households, the home loan is the single largest financial commitment they ever make. A small change in the interest rate, term or down payment can shift the lifetime cost by tens of thousands of dollars.',
        'Mortgage structures differ widely by country. The U.S. norm is a 30-year fixed-rate loan with no prepayment penalty. The U.K. and most of Europe use shorter fixed periods of 2 to 10 years that then revert to a variable rate. Japanese mortgages often run 35 years with very low rates, and several Islamic countries use murabaha or ijara structures that avoid interest entirely.',
      ],
      chart: {
        type: 'donut',
        title: 'Cost split of a $300,000 30-year mortgage at 6.5%',
        caption: 'Calculated with standard monthly amortisation; excludes taxes and insurance.',
        alt: 'Donut chart of principal versus interest on a 30 year mortgage at six and a half percent',
        unit: '',
        data: [
          { name: 'Principal', value: 300000, color: C.info },
          { name: 'Interest', value: 382634, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate a Mortgage Payment',
      paragraphs: [
        'Use the amortisation formula M = P × r × (1+r)ⁿ ÷ ((1+r)ⁿ − 1) where r is the monthly rate. Then add monthly property tax (annual tax ÷ 12) and homeowner insurance. In the United States, lenders also add private mortgage insurance (PMI) when the down payment is below 20 percent, typically 0.3 to 1.5 percent of the loan per year.',
        'A worked example: a $300,000 loan at 6.5 percent over 30 years has a principal-and-interest payment of about $1,896. Add $300 a month for property tax and $100 for insurance and the all-in figure is closer to $2,296.',
        'A common confusion is the difference between the interest rate and the APR shown on a mortgage estimate. The APR rolls origination fees, points and certain other costs into a single annualised number, which is why two loans with the same headline rate can have noticeably different APRs.',
      ],
      chart: {
        type: 'line',
        title: 'Remaining mortgage balance over 30 years at 6.5%',
        caption: 'Standard amortisation; balance falls slowly in early years and rapidly toward the end.',
        alt: 'Line chart of remaining mortgage balance over a thirty year amortisation period',
        xLabel: 'Year',
        yLabel: 'Balance ($)',
        data: [
          { x: 0, value: 300000 },
          { x: 5, value: 281000 },
          { x: 10, value: 254000 },
          { x: 15, value: 217000 },
          { x: 20, value: 167000 },
          { x: 25, value: 99000 },
          { x: 30, value: 0 },
        ],
      },
    },
    understanding: {
      heading: 'Understanding Your Mortgage Result',
      paragraphs: [
        'A common rule of thumb is that the all-in housing payment should not exceed about 28 percent of gross monthly income, and total debt payments should stay under 36 percent. Lenders often allow higher ratios but the borrower carries the strain.',
        'A common mistake is comparing mortgages on monthly payment alone. Two mortgages at the same monthly figure can have very different total interest if one has a longer term or a higher fee load. Always look at total interest paid and effective APR.',
        'Borderline situations include adjustable-rate mortgages (ARMs) where the rate is fixed for an introductory period and then resets. Borrowers who plan to refinance or move within the fixed window can benefit, but those who stay through the reset face potentially much higher payments.',
      ],
    },
    faqs: [
      { question: 'How much mortgage can I afford?', answer: 'A common guideline is to keep total monthly housing costs below 28 percent of gross income and total debt payments below 36 percent. Lenders may approve higher ratios, but the safer ceiling protects against rate rises and unexpected expenses.' },
      { question: 'What is the difference between fixed and adjustable rate mortgages?', answer: 'A fixed-rate mortgage keeps the same interest rate for the full term, giving predictable payments. An adjustable-rate mortgage starts with a lower rate that can rise or fall after the introductory period based on a benchmark index.' },
      { question: 'How does down payment affect the mortgage?', answer: 'A larger down payment reduces the loan amount and the monthly payment, lowers total interest paid and, in the U.S., usually removes the requirement for private mortgage insurance once you cross the 20 percent threshold.' },
      { question: 'Should I pay points to lower my mortgage rate?', answer: 'Mortgage points are upfront fees that buy a lower rate. They make sense if you plan to keep the loan long enough for the monthly savings to exceed the upfront cost, typically five years or more.' },
      { question: 'Can I pay off my mortgage early?', answer: 'In most countries, yes, though some lenders charge prepayment penalties during the first few years. Even small extra principal payments early in the loan can save tens of thousands in total interest.' },
    ],
  },

  // ─────────────────────────────────────────────── SIMPLE INTEREST
  'simple-interest': {
    whatIs: {
      heading: 'What is a Simple Interest Calculator?',
      paragraphs: [
        'A simple interest calculator computes the interest earned or owed on a fixed principal over a given period at a constant rate, without compounding. The concept of simple interest is older than written banking; clay tablets from ancient Mesopotamia, dating to around 2000 BCE, record loans with interest charges that look strikingly modern.',
        'It matters today because many short-term lending products, such as personal loans in some markets, payday loans and certain car loans, still use simple interest. Knowing the formula helps you spot when a lender is quoting a flat rate that disguises a much higher effective annual cost.',
        'Cultural and religious contexts differ. Islamic finance prohibits riba, often translated as interest, so traditional interest calculations are replaced by profit-sharing arrangements. In Western consumer law, simple interest is sometimes preferred for transparency because it does not snowball over time.',
      ],
      chart: {
        type: 'bar',
        title: 'Simple interest on $1,000 at different rates over 5 years',
        caption: 'Calculated as I = P × r × t with no compounding.',
        alt: 'Bar chart of simple interest earned on a fixed principal across five years at varying rates',
        xLabel: 'Annual rate',
        yLabel: 'Total interest ($)',
        data: [
          { name: '3%', value: 150, color: C.info },
          { name: '5%', value: 250, color: C.normal },
          { name: '7%', value: 350, color: C.warn },
          { name: '10%', value: 500, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Simple Interest',
      paragraphs: [
        'The formula is I = P × r × t, where P is principal, r is the annual interest rate as a decimal and t is time in years. The total amount due at the end is A = P × (1 + r × t). Both formulas assume the rate is applied to the original principal only, never to accumulated interest.',
        'A worked example: a $5,000 loan at 8 percent simple interest for 3 years generates I = 5,000 × 0.08 × 3 = $1,200. The total repayment is $6,200. Compare that with $1,298 of interest under monthly compounding, and you can see why lenders sometimes prefer compound interest.',
        'A common confusion arises with periods shorter than a year. If t is given in months you must divide by 12; if in days you must divide by 360 or 365 depending on the day-count convention used in your country or industry.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Simple Interest Result',
      paragraphs: [
        'The number returned is the total interest in absolute currency terms. To see the true cost or yield as a percentage you simply divide by the principal and multiply by 100. For short-term loans this is usually all you need.',
        'A common mistake is comparing a simple-interest loan with a compound-interest one purely on rate. A 10 percent simple-interest loan over five years can be cheaper than a 9 percent compound one over the same period, depending on compounding frequency.',
        'Borderline situations include loans with irregular payment schedules. Once principal is repaid in chunks, simple interest gives way to a more accurate "average daily balance" calculation, which most modern banks use even when they call the product "simple interest."',
      ],
    },
    faqs: [
      { question: 'What is the simple interest formula?', answer: 'The formula is I = P × r × t, where P is the principal, r is the annual interest rate as a decimal and t is time in years. The total amount due is principal plus interest.' },
      { question: 'How is simple interest different from compound interest?', answer: 'Simple interest is calculated only on the original principal, while compound interest also charges interest on accumulated interest. Over long periods compound interest grows much faster than simple interest at the same rate.' },
      { question: 'When is simple interest used in real life?', answer: 'Simple interest is common on short-term car loans in some markets, certain personal loans, and many bonds that pay a fixed coupon. Mortgages and credit cards almost always use compound interest instead.' },
      { question: 'Can the time period be in months instead of years?', answer: 'Yes. Convert months to years by dividing by 12, or days by dividing by 360 or 365 depending on the convention. Always match the time units to those used for the interest rate.' },
      { question: 'Is simple interest always cheaper for borrowers?', answer: 'For loans of less than a year and the same nominal rate, simple interest is usually cheaper. For longer loans the answer depends on the compound-interest frequency and any fees rolled into the APR.' },
    ],
  },

  // ─────────────────────────────────────────────── COMPOUND INTEREST
  'compound-interest': {
    whatIs: {
      heading: 'What is a Compound Interest Calculator?',
      paragraphs: [
        'A compound interest calculator works out how much a deposit grows when each period of interest is added back to the balance and then earns interest itself. Albert Einstein is often credited with calling compound interest "the eighth wonder of the world," and although the quote is apocryphal, the math really is one of the most powerful forces in personal finance.',
        'It matters because over decades, compounding can transform modest savings into substantial wealth, and modest debts into crippling ones. A 20-year-old who saves $200 a month at 7 percent has roughly $525,000 at age 65; the same effort started at 35 yields just $245,000.',
        'Compounding frequency varies by country and product. U.S. savings accounts compound daily, U.S. mortgages compound monthly, Canadian mortgages compound semi-annually, and many bonds use simple interest paid annually or semi-annually. The compound-interest calculator lets you switch between these without breaking the math.',
      ],
      chart: {
        type: 'line',
        title: '$10,000 invested at different annual rates, no contributions',
        caption: 'Calculated with annual compounding for 30 years.',
        alt: 'Line chart of compound growth of a fixed initial investment over thirty years at varying rates',
        xLabel: 'Year',
        yLabel: 'Balance ($)',
        series: [
          { key: 'r4', label: '4%', color: C.info },
          { key: 'r7', label: '7%', color: C.normal },
          { key: 'r10', label: '10%', color: C.warn },
        ],
        data: [
          { x: 0, r4: 10000, r7: 10000, r10: 10000 },
          { x: 10, r4: 14802, r7: 19672, r10: 25937 },
          { x: 20, r4: 21911, r7: 38697, r10: 67275 },
          { x: 30, r4: 32434, r7: 76123, r10: 174494 },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Compound Interest',
      paragraphs: [
        'The formula is A = P × (1 + r ÷ n)ⁿᵗ, where P is the principal, r is the annual rate as a decimal, n is compounding periods per year and t is time in years. With regular contributions you add the future value of an annuity term: PMT × [((1 + r ÷ n)ⁿᵗ − 1) ÷ (r ÷ n)].',
        'A worked example: $10,000 at 6 percent compounded monthly for 10 years grows to 10,000 × (1 + 0.06 ÷ 12)¹²⁰ = $18,194. With $200 added each month, the final balance climbs to about $51,000.',
        'A common confusion is between nominal and effective interest rates. A 6 percent nominal rate compounded monthly produces an effective annual rate of 6.17 percent. EU consumer regulations require the effective rate, called APR or AER, to be displayed clearly, but in many other markets the nominal rate is still the headline figure.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Compound Interest Result',
      paragraphs: [
        'The most striking part of compounding is how the balance accelerates in the later years. In a 30-year graph, more than half of the total growth typically happens in the last decade. This is why financial planners stress starting early; even small amounts have time to compound into meaningful sums.',
        'A common mistake is to compare returns over different time horizons without annualising. A fund up 50 percent over 5 years has returned about 8.4 percent annualised; the same 50 percent over 10 years is just 4.1 percent.',
        'Borderline situations include very high-frequency compounding, where the difference between daily and continuous compounding becomes negligible, and very high inflation, where a high nominal return can hide a low or even negative real return.',
      ],
    },
    faqs: [
      { question: 'What is the formula for compound interest?', answer: 'The formula is A = P × (1 + r ÷ n)ⁿᵗ, where A is the final amount, P is principal, r is annual rate as a decimal, n is compounding periods per year and t is time in years.' },
      { question: 'How often is interest compounded?', answer: 'It depends on the product. Savings accounts often compound daily, certificates of deposit usually monthly or quarterly, and many bonds semi-annually. The more frequently interest compounds, the higher the effective annual return at the same nominal rate.' },
      { question: 'Why is compound interest so powerful over time?', answer: 'Each period of interest is added to the balance and earns interest itself in subsequent periods. Over decades this snowball effect can multiply the original sum many times over, even at modest annual rates.' },
      { question: 'How does inflation affect compound returns?', answer: 'Inflation eats into the real purchasing power of compounded returns. A 6 percent return with 3 percent inflation produces a real return of roughly 3 percent, which is a more honest measure of how much wealthier you are getting.' },
      { question: 'What is the rule of 72?', answer: 'The rule of 72 estimates how long it takes a sum to double at a given annual rate by dividing 72 by the rate. So at 8 percent, money doubles in roughly 9 years; at 6 percent, in 12 years.' },
    ],
  },

  // ─────────────────────────────────────────────── SAVINGS
  savings: {
    whatIs: {
      heading: 'What is a Savings Calculator?',
      paragraphs: [
        'A savings calculator projects the future value of regular deposits into an interest-bearing account. The idea of systematic saving became mainstream after the founding of the Trustee Savings Banks in Britain in 1810, which encouraged working-class families to set aside small weekly amounts and earn interest on the balance.',
        'Saving matters because even small monthly amounts add up surprisingly quickly when compounded over years. A 25-year-old who saves $300 a month at 5 percent has roughly $458,000 at age 65, more than enough to fund a sizeable retirement contribution on top of any pension.',
        'Cultural patterns vary widely. Household savings rates in 2023 ranged from under 5 percent in the United States and United Kingdom to about 14 percent in Germany and over 30 percent in China, according to OECD and World Bank data. The calculator works the same way regardless of the rate at which you deposit.',
      ],
      chart: {
        type: 'line',
        title: 'Savings growth: $300 per month at 5% over 30 years',
        caption: 'Computed with monthly compounding and end-of-month deposits.',
        alt: 'Line chart showing how monthly contributions grow over thirty years at five percent',
        xLabel: 'Year',
        yLabel: 'Balance ($)',
        data: [
          { x: 0, value: 0 },
          { x: 5, value: 20415 },
          { x: 10, value: 46585 },
          { x: 15, value: 80140 },
          { x: 20, value: 123180 },
          { x: 25, value: 178380 },
          { x: 30, value: 249168 },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Future Savings',
      paragraphs: [
        'For regular deposits, future value FV = PMT × [((1 + i)ⁿ − 1) ÷ i] × (1 + i), where PMT is the periodic deposit, i is the periodic interest rate and n is the total number of periods. The final (1 + i) factor applies if deposits are made at the start of each period; remove it for end-of-period deposits.',
        'A worked example: $250 saved monthly at 4 percent annual interest for 20 years gives FV = 250 × [((1 + 0.00333)²⁴⁰ − 1) ÷ 0.00333] ≈ $91,700. Total contributions are $60,000, and interest accounts for the remaining $31,700.',
        'A common confusion is between nominal and real growth. If inflation runs at 2.5 percent while your account earns 4 percent, your real purchasing power grows at only about 1.5 percent per year. Always check whether forecasts are quoted in nominal or real terms.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Savings Projection',
      paragraphs: [
        'Use the projection as a planning baseline rather than a promise. Real-life savings rarely run in a straight line because interest rates change, contributions pause, and emergencies happen. Reviewing the plan once a year and adjusting the deposit amount keeps the projection meaningful.',
        'A common mistake is leaving large balances in low-yield checking or savings accounts when better-yielding alternatives exist. Money-market accounts, term deposits and short-duration bond funds often offer materially better rates with similar risk.',
        'Borderline situations include very long horizons of 30 years or more, where even small differences in expected return have an outsized impact on the projected balance. Sensitivity analysis at three different rates is the safest way to plan.',
      ],
    },
    faqs: [
      { question: 'How much should I save each month?', answer: 'A widely cited rule of thumb is to save 15 to 20 percent of gross income, including any retirement contributions. The exact figure depends on your age, goals and current expenses, but consistency matters more than a perfect percentage.' },
      { question: 'Are savings calculators accurate?', answer: 'They are accurate for the inputs you provide. Real returns will differ because interest rates change, you may pause contributions, and account fees take a slice. Treat the projection as a planning tool rather than a guarantee.' },
      { question: 'Should I save or invest?', answer: 'Cash savings are best for short-term goals and emergency funds. For goals five years or more away, diversified investments usually beat cash, although they carry more short-term volatility.' },
      { question: 'How do interest rates affect savings growth?', answer: 'Higher rates accelerate growth, especially over long horizons. A one percentage point difference can change a 30-year balance by 25 to 30 percent because of compounding.' },
      { question: 'What is the difference between APR and APY?', answer: 'APR is the simple annual interest rate, while APY (effective annual yield) reflects the effect of compounding within the year. Two accounts with the same APR but different compounding frequencies will have different APYs.' },
    ],
  },

  // ─────────────────────────────────────────────── INVESTMENT
  investment: {
    whatIs: {
      heading: 'What is an Investment Calculator?',
      paragraphs: [
        'An investment calculator projects the future value of a lump-sum, regular contributions, or both, given an expected annual return. The mathematics is the same future-value formula taught in 19th-century actuarial textbooks, but the application has spread from professional pension funds to anyone with a brokerage app on their phone.',
        'Investing matters because, historically, diversified equity portfolios have returned 6 to 8 percent per year above inflation in developed markets. Over decades that real return is what funds early retirement, university education and large purchases without leaning on debt.',
        'Returns vary by region and era. The U.S. S&P 500 has returned roughly 10 percent nominal per year over the past century; UK and German equities returned closer to 7 percent in real terms; Japanese equities famously delivered near-zero returns from 1990 to 2010. Long-run figures should always be tempered by where and when they were measured.',
      ],
      chart: {
        type: 'line',
        title: '$5,000 lump sum + $200 monthly contribution at 7%',
        caption: 'Calculated with monthly compounding and end-of-month deposits.',
        alt: 'Line chart projecting investment growth from a lump sum and monthly contributions at seven percent',
        xLabel: 'Year',
        yLabel: 'Balance ($)',
        data: [
          { x: 0, value: 5000 },
          { x: 5, value: 21500 },
          { x: 10, value: 44400 },
          { x: 15, value: 76900 },
          { x: 20, value: 122700 },
          { x: 25, value: 187100 },
          { x: 30, value: 277500 },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Investment Growth',
      paragraphs: [
        'For a lump-sum investment use FV = P × (1 + r ÷ n)ⁿᵗ. For periodic contributions add PMT × [((1 + i)ⁿ − 1) ÷ i], where i is the periodic rate. Combining both gives the total future value of an investment plan that begins with a lump sum and continues with regular deposits.',
        'A worked example: invest $10,000 today plus $300 a month for 25 years at an expected 7 percent annual return. Lump sum FV ≈ $54,300. Contribution FV ≈ $243,400. Total ≈ $297,700, against contributions of $100,000.',
        'A common confusion is treating average return as guaranteed return. A 7 percent average over 25 years can hide periods of −20 percent and +30 percent that occur in different orders. Sequence-of-returns risk matters most just before and after retirement.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Investment Projection',
      paragraphs: [
        'Read the result as one possible outcome from a wide range. A common practice is to run the same calculation at three rates of return: a conservative one, a base case and an optimistic one. The spread between them is the uncertainty you are planning around.',
        'A common mistake is not subtracting fees. A 1 percent annual fee can shave a third off the final balance over 30 years, even though it sounds tiny on a year-by-year basis.',
        'Borderline situations include heavily concentrated portfolios, where a single stock dominates. The math of compounding still applies, but the variance around the projection is far wider than for a diversified index.',
      ],
    },
    faqs: [
      { question: 'How accurate is an investment calculator?', answer: 'It is accurate for the assumptions you put in. Future returns are uncertain, so treat the result as a planning estimate, not a forecast. Running the calculation at several rates of return shows the realistic range.' },
      { question: 'What is a realistic long-term return?', answer: 'Diversified equity portfolios in developed markets have historically returned 6 to 8 percent above inflation over multi-decade periods. Bonds have returned roughly 1 to 3 percent above inflation, with much lower volatility.' },
      { question: 'How important are fees in investing?', answer: 'Very important. A one percent annual fee can reduce a 30-year final balance by about 25 to 30 percent compared with a near-zero-fee index fund, because the fee compounds against you exactly as returns compound for you.' },
      { question: 'Should I invest a lump sum or spread it out?', answer: 'Historically, lump-sum investing has beaten dollar-cost averaging about two-thirds of the time, simply because markets rise more often than they fall. Spreading deposits reduces regret risk if markets fall right after you invest.' },
      { question: 'How does inflation affect my investment?', answer: 'A nominal projection ignores inflation. To get the real purchasing power of your future balance, deflate it by the expected inflation rate compounded over the same period.' },
    ],
  },

  // ─────────────────────────────────────────────── RETIREMENT
  retirement: {
    whatIs: {
      heading: 'What is a Retirement Calculator?',
      paragraphs: [
        'A retirement calculator estimates how much you need to save by the time you stop working in order to fund a chosen lifestyle for the rest of your life. Modern retirement planning rests on actuarial mathematics that go back to John Graunt and Edmund Halley in the 17th century, who built the first life tables.',
        'Retirement planning matters because life expectancy keeps rising. A 65-year-old today in the U.S. is projected to live another 19 to 22 years on average, and a 65-year-old in Japan another 23 to 25 years. A retirement nest egg has to last potentially three decades.',
        'State pension systems differ widely. The U.S. Social Security replaces about 40 percent of pre-retirement income for an average earner; many European systems replace 50 to 80 percent; in countries with weaker state pensions, individual savings carry almost the entire load.',
      ],
      chart: {
        type: 'bar',
        title: 'Approximate target retirement savings by age (multiple of salary)',
        caption: 'Data source: Fidelity retirement savings benchmarks.',
        alt: 'Bar chart of recommended retirement savings as a multiple of annual salary at different ages',
        xLabel: 'Age',
        yLabel: 'Multiple of salary',
        data: [
          { name: '30', value: 1, color: C.info },
          { name: '40', value: 3, color: C.normal },
          { name: '50', value: 6, color: C.warn },
          { name: '60', value: 8, color: C.warn },
          { name: '67', value: 10, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Retirement Needs',
      paragraphs: [
        'Start with target annual spending in retirement, often estimated as 70 to 85 percent of pre-retirement income. Multiply by 25, the inverse of the well-known 4 percent safe withdrawal rate, to get a rough required nest egg. Then check whether your projected savings reach that figure given current contributions and an expected return.',
        'A worked example: target spending of $50,000 a year implies a nest egg of $50,000 × 25 = $1.25 million. If you have $200,000 today and contribute $1,000 a month at an expected 6 percent for 25 years, you arrive with about $1.55 million, which is comfortably above target.',
        'A common confusion is mixing nominal and real figures. The 4 percent rule was derived from historical inflation-adjusted withdrawals, so it implicitly assumes you raise withdrawals each year with inflation. Using nominal numbers without adjustment can overstate income or understate need.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Retirement Result',
      paragraphs: [
        'Treat the projected nest egg as a midpoint. Real-world retirements get pushed around by health, family events, market crashes and tax changes. Sensitivity analysis at conservative, base and optimistic returns reveals how much margin you actually have.',
        'A common mistake is ignoring sequence-of-returns risk. A bad market in the first five years of retirement can do disproportionate damage if you are withdrawing at the same time. Holding two to three years of expenses in cash can cushion that risk.',
        'Borderline situations include early retirement (FIRE) plans, which need a longer horizon than 30 years and therefore typically use a more conservative withdrawal rate of 3 to 3.5 percent.',
      ],
    },
    faqs: [
      { question: 'How much do I need to retire?', answer: 'A common starting point is 25 times your expected annual spending, which corresponds to the 4 percent safe withdrawal rate. The exact figure depends on lifestyle, health, location and whether you have any pension or rental income.' },
      { question: 'What is the 4 percent rule?', answer: 'The 4 percent rule says you can withdraw 4 percent of your initial portfolio in the first year of retirement and adjust that amount for inflation each year afterwards, with a high probability of the money lasting 30 years.' },
      { question: 'When should I start saving for retirement?', answer: 'As early as possible. Saving $300 a month from age 25 produces about twice the nest egg of starting at 35 with the same monthly amount, due purely to the extra decade of compounding.' },
      { question: 'How does Social Security factor into my plan?', answer: 'Treat Social Security as a base layer of inflation-adjusted income. Subtract its expected annual benefit from your target retirement spending to find the gap your savings must fill.' },
      { question: 'Can I retire on $1 million?', answer: 'It depends on your spending. At a 4 percent withdrawal rate, $1 million supports about $40,000 a year of inflation-adjusted spending, which goes much further in lower-cost regions than in major cities.' },
    ],
  },

  // ─────────────────────────────────────────────── INFLATION
  inflation: {
    whatIs: {
      heading: 'What is an Inflation Calculator?',
      paragraphs: [
        'An inflation calculator shows how the purchasing power of a sum of money changes over time. The idea of measuring inflation systematically goes back to the work of British statistician Arthur Bowley in the early 20th century, and central banks have been publishing consumer price indices ever since.',
        'Inflation matters because it quietly erodes savings, fixes the real value of debts, and shifts the real take-home of fixed pensions. Two percent annual inflation halves purchasing power roughly every 35 years; eight percent halves it in less than nine.',
        'Different countries publish different headline measures. The United States uses CPI-U, the U.K. the CPIH, the eurozone the HICP, and India the CPI-Combined. Each excludes or includes different baskets of goods, which is why headline inflation rates rarely match exactly across borders even in the same year.',
      ],
      chart: {
        type: 'bar',
        title: 'Approximate U.S. CPI inflation by decade (annualised)',
        caption: 'Data source: U.S. Bureau of Labor Statistics historical CPI-U.',
        alt: 'Bar chart of average annual U.S. consumer price inflation by decade',
        xLabel: 'Decade',
        yLabel: 'Average annual %',
        data: [
          { name: '1970s', value: 7.1, color: C.risk },
          { name: '1980s', value: 5.6, color: C.warn },
          { name: '1990s', value: 3.0, color: C.normal },
          { name: '2000s', value: 2.6, color: C.normal },
          { name: '2010s', value: 1.8, color: C.info },
          { name: '2020s', value: 4.5, color: C.warn },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Inflation-Adjusted Value',
      paragraphs: [
        'The basic formula is FV = PV × (1 + i)ⁿ for the future nominal value, and PV = FV ÷ (1 + i)ⁿ for the past real value, where i is the average annual inflation rate. Equivalently, dividing nominal values by the ratio of price indices in the two years gives the same answer.',
        'A worked example: $100 in 2000 is equivalent to about $179 in 2024 at an average U.S. inflation of about 2.5 percent. The same $100 in 1980 is closer to $370 today, because the late 1970s and early 1980s saw far higher inflation.',
        'A common confusion is conflating inflation with the cost of any one item. Inflation is the average across a basket; particular items like university tuition and healthcare can rise much faster than average, while electronics and clothing often fall in real terms.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Inflation Result',
      paragraphs: [
        'The result tells you how much money you would need in another year to buy the same basket of goods and services. It does not predict actual spending, just the average drift of prices.',
        'A common mistake is comparing nominal salaries across decades without adjusting. A $40,000 salary in 1990 was worth roughly $96,000 in 2024 dollars, so a 2024 salary of $80,000 is actually a real-terms pay cut.',
        'Borderline situations include hyperinflation, where weekly or even daily price changes overwhelm any monthly index, and deflation, where the formula still works but the cumulative ratio is below one.',
      ],
    },
    faqs: [
      { question: 'How is inflation measured?', answer: 'Statistical agencies build a basket of goods and services that represents typical household spending and price it each month. The percentage change in the basket cost from one period to another is the headline inflation rate.' },
      { question: 'What causes inflation?', answer: 'Inflation rises when demand outpaces supply, when production costs increase, or when central banks expand the money supply faster than output grows. Most inflation episodes combine all three.' },
      { question: 'How can I protect savings from inflation?', answer: 'Inflation-linked bonds such as TIPS in the U.S. and index-linked gilts in the U.K. directly track inflation. Equities and real estate have historically beaten inflation over long periods, although with more short-term volatility.' },
      { question: 'What is the difference between CPI and core inflation?', answer: 'CPI includes all items in the basket, while core inflation excludes food and energy because they are volatile. Central banks often watch core inflation more closely when setting policy.' },
      { question: 'Is deflation good or bad?', answer: 'Mild deflation in a healthy economy is rare and not necessarily bad, but sustained deflation tends to depress consumer spending and increase the real burden of debt, which can deepen recessions.' },
    ],
  },

  // ─────────────────────────────────────────────── AVERAGE
  average: {
    whatIs: {
      heading: 'What is an Average Calculator?',
      paragraphs: [
        'An average calculator finds central tendencies in a list of numbers, most commonly the arithmetic mean, but also the median, mode and range. The arithmetic mean dates to ancient Babylonian astronomy, where scribes averaged repeated measurements of planetary positions to reduce error. Modern statistics formalised the median and mode in the 19th century through the work of Francis Galton and Karl Pearson.',
        'Averages matter because real-world data is noisy and a single summary number is often what we use to decide. Test scores, household incomes, rainfall and patient blood pressure are all routinely reduced to averages, and that single number drives countless decisions every day.',
        'Average choice is cultural in subtle ways. Income statistics in the United States are most often reported as median household income because the very high earners would otherwise pull the mean up. Many European tax systems publish both mean and median to give a more complete picture.',
      ],
      chart: {
        type: 'bar',
        title: 'Arithmetic mean vs median for a skewed dataset',
        caption: 'Illustrative example: incomes of 9 people in a small office.',
        alt: 'Bar chart comparing the mean and median for a positively skewed income dataset',
        xLabel: 'Statistic',
        yLabel: 'Value (k$)',
        data: [
          { name: 'Mean', value: 92, color: C.warn },
          { name: 'Median', value: 60, color: C.normal },
          { name: 'Mode', value: 55, color: C.info },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate the Mean, Median and Mode',
      paragraphs: [
        'The arithmetic mean is the sum of all values divided by the count. The median is the middle value once the data is sorted, or the average of the two middle values if the count is even. The mode is the most frequently occurring value, and a dataset can have one, several or no modes.',
        'A worked example: for the numbers 4, 6, 8, 8, 10 the mean is 36 ÷ 5 = 7.2, the median is 8 and the mode is 8. For 2, 2, 3, 5, 7, 9 the mean is 4.67, the median is (3 + 5) ÷ 2 = 4 and the mode is 2.',
        'A common confusion arises with skewed data. For income, house prices and wait times the mean is pulled up by extreme values, so the median is usually a better summary. For symmetrical data such as adult height the mean and median are practically identical.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Average Result',
      paragraphs: [
        'When you read an average, ask which type it is and how the data is distributed. A mean of 100 in a dataset that spans 1 to 1,000 is far less informative than the same mean in a dataset that spans 95 to 105. Pair averages with standard deviation or interquartile range whenever possible.',
        'A common mistake is averaging averages. The mean of two class averages is not the average of the combined class unless both classes have the same size. To combine averages correctly you weight each by its sample size.',
        'Borderline situations include datasets with outliers and very small samples. Outliers can shift the mean dramatically while leaving the median almost unchanged; small samples produce averages with wide confidence intervals that can mislead decision-makers.',
      ],
    },
    faqs: [
      { question: 'What is the difference between mean, median and mode?', answer: 'Mean is the arithmetic average of all values, median is the middle value once data is sorted, and mode is the most frequent value. Each summarises a dataset differently and one or another is more useful depending on the data.' },
      { question: 'When should I use median instead of mean?', answer: 'Use the median when the data is skewed or contains outliers, such as house prices or salaries. The median represents the typical value better than the mean in those situations.' },
      { question: 'Can a dataset have more than one mode?', answer: 'Yes. A dataset is bimodal when two values tie for most frequent, multimodal with more than two ties, and has no mode at all when every value occurs the same number of times.' },
      { question: 'How is weighted average different?', answer: 'A weighted average gives some values more importance than others by multiplying each value by a weight before summing and dividing by the total of the weights. It is the right tool when not all observations are equally important.' },
      { question: 'What is the geometric mean used for?', answer: 'The geometric mean is the nth root of the product of n positive numbers and is used for averaging rates of growth such as investment returns. It correctly accounts for compounding, where the arithmetic mean would overstate the long-run rate.' },
    ],
  },

  // ─────────────────────────────────────────────── FRACTION
  fraction: {
    whatIs: {
      heading: 'What is a Fraction Calculator?',
      paragraphs: [
        'A fraction calculator adds, subtracts, multiplies, divides and simplifies fractions while keeping the result in exact rational form rather than rounding to a decimal. The notation a/b for fractions was popularised in the 12th century by the Italian mathematician Fibonacci, although fractional arithmetic itself goes back to ancient Egyptian and Babylonian tablets.',
        'Fractions still matter because many real-world quantities are naturally rational rather than decimal. Cooking recipes use fractions, U.S. construction uses inches divided into 1/2, 1/4, 1/8 and 1/16, and music subdivides beats into halves, quarters and eighths.',
        'Even number systems differ. Ancient Egyptians used unit fractions almost exclusively, expressing 3/4 as 1/2 + 1/4. Medieval Arab mathematicians developed the modern horizontal-bar notation. Modern French and German textbooks teach fractions slightly differently from American ones, although the underlying arithmetic is universal.',
      ],
      chart: {
        type: 'pie',
        title: 'Pizza divided into eighths',
        caption: 'Visualises 3/8 of a whole as a familiar fraction example.',
        alt: 'Pie chart showing three eighths of a whole highlighted in a divided pizza',
        unit: '/8',
        data: [
          { name: 'Eaten', value: 3, color: C.warn },
          { name: 'Remaining', value: 5, color: C.normal },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate with Fractions',
      paragraphs: [
        'To add or subtract fractions, convert them to a common denominator: a/b ± c/d = (a × d ± c × b) ÷ (b × d). To multiply, simply multiply numerators and denominators: a/b × c/d = (a × c) ÷ (b × d). To divide, multiply by the reciprocal: a/b ÷ c/d = (a × d) ÷ (b × c). Always simplify the final answer by dividing numerator and denominator by their greatest common divisor.',
        'A worked example: 2/3 + 1/4 = (2 × 4 + 1 × 3) ÷ (3 × 4) = 11/12. Multiplication: 3/5 × 2/7 = 6/35. Division: 4/9 ÷ 2/3 = (4 × 3) ÷ (9 × 2) = 12/18 = 2/3 after simplification.',
        'A common confusion is mixing improper fractions and mixed numbers. The improper fraction 7/3 is the same as the mixed number 2 1/3, but accidentally writing 21/3 changes the value entirely. Calculators handle both formats but you have to enter them unambiguously.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Fraction Result',
      paragraphs: [
        'A fraction in its simplest form has numerator and denominator that share no common factor other than 1. This is the form most teachers and standards expect on assignments, and it is the form a fraction calculator returns by default.',
        'A common mistake is to add denominators along with numerators, writing 1/2 + 1/3 = 2/5. The correct answer is 5/6, because you need a common denominator first.',
        'Borderline situations include fractions with very large numerators and denominators that come out of repeated multiplication, where finding the greatest common divisor by hand is tedious. Calculators handle this automatically and are far less error-prone than manual simplification.',
      ],
    },
    faqs: [
      { question: 'How do you add fractions with different denominators?', answer: 'Find a common denominator, often the least common multiple of both denominators, convert each fraction to that denominator, then add the numerators. The result usually needs simplification.' },
      { question: 'What is the difference between proper and improper fractions?', answer: 'A proper fraction has a numerator smaller than its denominator, like 3/4. An improper fraction has a numerator equal to or greater than its denominator, like 7/4, and can be rewritten as a mixed number such as 1 3/4.' },
      { question: 'How do you simplify a fraction?', answer: 'Find the greatest common divisor of the numerator and denominator, then divide both by it. For example, 18/24 simplifies to 3/4 because the greatest common divisor is 6.' },
      { question: 'How do you convert a fraction to a decimal?', answer: 'Divide the numerator by the denominator. Some fractions, like 1/2, give a terminating decimal of 0.5. Others, like 1/3, give a repeating decimal of 0.333... that has to be rounded for practical use.' },
      { question: 'Why do we need fractions when we have decimals?', answer: 'Fractions are exact, while decimals are often approximations of values that do not terminate. Fractions are also more natural for proportions in cooking, music, construction and many engineering measurements.' },
    ],
  },

  // ─────────────────────────────────────────────── RATIO
  ratio: {
    whatIs: {
      heading: 'What is a Ratio Calculator?',
      paragraphs: [
        'A ratio calculator simplifies, scales or solves for an unknown term in a proportion such as 4:6 = x:9. The colon notation for ratios was popularised by the German mathematician Gottfried Leibniz in the 17th century, though the underlying idea was central to Greek mathematics, especially Euclid\'s definition of the "golden ratio."',
        'Ratios matter because they describe relationships between quantities without committing to absolute units. Recipe scaling, map distances, photographic aspect ratios and gear teeth on bicycles are all expressed as ratios because the relationship is what matters, not the absolute values.',
        'Cultural and historical examples abound. The 16:9 aspect ratio used by modern televisions was chosen as a compromise between 4:3 television and the wider cinema formats. The 1.414:1 ratio of A-series paper sizes used in Europe is mathematically chosen so each cut in half produces the next size with the same aspect ratio.',
      ],
      chart: {
        type: 'bar',
        title: 'Common aspect ratios in modern devices',
        caption: 'Width-to-height ratios used across consumer screens and film.',
        alt: 'Bar chart of common aspect ratios for monitors phones and cinema screens',
        xLabel: 'Format',
        yLabel: 'Width / height',
        data: [
          { name: '4:3 (old TV)', value: 1.33, color: C.info },
          { name: '16:9 (HD TV)', value: 1.78, color: C.normal },
          { name: '21:9 (cinema)', value: 2.33, color: C.warn },
          { name: '19.5:9 (phone)', value: 2.17, color: C.warn },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Ratios',
      paragraphs: [
        'To simplify a ratio, divide every term by the greatest common divisor. To scale a ratio, multiply every term by the same factor. To solve a proportion a:b = c:x, cross-multiply and solve: a × x = b × c, so x = b × c ÷ a.',
        'A worked example: simplify 24:36:60 by dividing by 12 to get 2:3:5. Solve 4:7 = 12:x by cross-multiplying: 4x = 84, x = 21. Scale a recipe of 2:3:1 (flour:water:salt) by a factor of 5 to get 10:15:5.',
        'A common confusion is mixing part-to-part and part-to-whole ratios. A 3:1 mix of water and concentrate means three parts water for every part concentrate, so the concentrate is 1/4 of the total, not 1/3 as people sometimes assume.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Ratio Result',
      paragraphs: [
        'A simplified ratio is just the same relationship expressed in the smallest whole numbers. A scaled ratio multiplies the relationship to a different overall size while keeping proportions intact. Both are exact and reversible.',
        'A common mistake is averaging two ratios as if they were numbers. The "average" of a 2:1 ratio and a 1:2 ratio is not 1:1; the correct combined ratio depends on the totals being mixed.',
        'Borderline situations include ratios involving negative or fractional values, which are mathematically valid but rarely meaningful in real life. Always check that the underlying quantities make physical sense before relying on a calculated ratio.',
      ],
    },
    faqs: [
      { question: 'How do you simplify a ratio?', answer: 'Divide each term of the ratio by the greatest common divisor of all terms. For example, 18:24 simplifies to 3:4 because the greatest common divisor is 6.' },
      { question: 'What is a proportion?', answer: 'A proportion is a statement that two ratios are equal, such as 2:3 = 4:6. Proportions are used to scale recipes, compute map distances and solve "if then" word problems with one unknown.' },
      { question: 'How do you scale a ratio?', answer: 'Multiply every term by the same factor. To double a 2:3:5 ratio, multiply by 2 to get 4:6:10, which preserves the original relationship while increasing the total.' },
      { question: 'What is the golden ratio?', answer: 'The golden ratio, approximately 1.618:1, appears in art, architecture and nature. A line is divided in the golden ratio when the longer part divided by the shorter part equals the total length divided by the longer part.' },
      { question: 'How are ratios different from fractions?', answer: 'A ratio compares two or more quantities, while a fraction expresses one quantity as a part of a whole. A ratio of 1:3 is equivalent to the fraction 1/4 of the total, not 1/3.' },
    ],
  },

  // ─────────────────────────────────────────────── SQUARE ROOT
  'square-root': {
    whatIs: {
      heading: 'What is a Square Root Calculator?',
      paragraphs: [
        'A square root calculator finds a number which, when multiplied by itself, gives the input value. The radical symbol √ was introduced by the German mathematician Christoff Rudolff in 1525, although clay tablets from the Old Babylonian period, around 1800 BCE, already contained startlingly accurate approximations of √2.',
        'Square roots matter because they appear everywhere in geometry, physics and statistics. The Pythagorean theorem requires a square root to find the hypotenuse of a right triangle, the standard deviation in statistics is the square root of the variance, and the period of a pendulum is proportional to the square root of its length.',
        'The discovery that √2 is irrational, attributed to the Pythagorean mathematician Hippasus around 500 BCE, was so unsettling that legend says he was thrown overboard for revealing it. We now teach this fact to high schoolers as a routine consequence of decimal representation.',
      ],
      chart: {
        type: 'line',
        title: 'Square root function for x from 0 to 100',
        caption: 'Calculated as y = √x; growth slows as x increases.',
        alt: 'Line chart of the square root function showing slowing growth as x increases',
        xLabel: 'x',
        yLabel: '√x',
        data: [
          { x: 0, value: 0 },
          { x: 4, value: 2 },
          { x: 9, value: 3 },
          { x: 16, value: 4 },
          { x: 25, value: 5 },
          { x: 49, value: 7 },
          { x: 64, value: 8 },
          { x: 100, value: 10 },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate a Square Root by Hand',
      paragraphs: [
        'For perfect squares such as 25, 36 and 81, the square root is the integer that, when squared, returns the original. For other values you can use the long-division method or, more practically, Newton\'s method: start with a guess g and iterate g = (g + x ÷ g) ÷ 2 until the answer stabilises.',
        'A worked example: find √50. Start with g = 7, since 7² = 49 ≈ 50. Iterate: (7 + 50 ÷ 7) ÷ 2 = (7 + 7.143) ÷ 2 = 7.0714. One more iteration gives 7.07107, which is √50 to five decimal places.',
        'A common confusion is the sign. Both 4 and −4 squared give 16, so 16 has two square roots: +4 and −4. The radical symbol √ conventionally refers to the non-negative root, but in algebra the equation x² = 16 has two solutions, x = ±4.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Square Root Result',
      paragraphs: [
        'For most practical purposes a square root is reported to a fixed number of decimal places. Engineers in metric units commonly use four to six decimals for length calculations, while statistical software will keep many more internally to avoid rounding errors when squaring back.',
        'A common mistake is to take the square root of a sum and treat it as the sum of the square roots. √(a + b) is not equal to √a + √b. This is one of the most frequent errors in beginner algebra.',
        'Borderline situations include the square root of a negative number, which has no real solution but is well defined in the complex numbers as i√|x|. Modern calculators usually flag a "domain error" if you try this in real-number mode.',
      ],
    },
    faqs: [
      { question: 'What is the square root of a negative number?', answer: 'There is no real square root of a negative number, because squaring any real number gives a non-negative result. In the complex numbers, the square root of −1 is the imaginary unit i, and √(−x) for positive x equals i√x.' },
      { question: 'How do you find a square root without a calculator?', answer: 'For perfect squares, recall the integer that squares to the value. For others, use Newton\'s method: start with a guess, average it with the original divided by the guess, and repeat until the answer stops changing.' },
      { question: 'Is the square root of 2 irrational?', answer: 'Yes. The proof that √2 cannot be written as a ratio of integers is one of the oldest in mathematics, attributed to the Pythagoreans in the 5th century BCE.' },
      { question: 'What is the difference between a square root and a cube root?', answer: 'A square root of x is a number whose square equals x; a cube root of x is a number whose cube equals x. Square roots are denoted √x and cube roots ∛x.' },
      { question: 'Why do square roots appear in the Pythagorean theorem?', answer: 'The theorem says a² + b² = c² for a right triangle, so to recover the hypotenuse c from the two shorter sides you take the square root of the sum of their squares.' },
    ],
  },

  // ─────────────────────────────────────────────── POWER
  power: {
    whatIs: {
      heading: 'What is a Power Calculator?',
      paragraphs: [
        'A power calculator raises a base number to an exponent and returns the result, also called a power. The Scottish mathematician John Napier introduced the modern superscript notation for exponents around 1614 in his work on logarithms, although the idea of repeated multiplication is much older and appears in Indian and Greek mathematics.',
        'Powers matter because they describe growth and decay everywhere in nature. Compound interest, radioactive decay, sound intensity, computer storage and earthquake magnitudes all use exponents. The fact that 2¹⁰ = 1,024 is why a "kilobyte" of memory is not exactly a thousand bytes.',
        'Cultural and historical curiosities include Indian mathematicians using high powers of 10 in cosmology, naming numbers as large as 10⁵³ centuries before such names appeared in Europe. The Greek myth of the inventor of chess, who asked for 2⁶³ grains of rice as a reward, illustrates how quickly powers grow.',
      ],
      chart: {
        type: 'line',
        title: 'Powers of 2 from 0 to 10',
        caption: '2ⁿ doubles at every step; classic exponential growth.',
        alt: 'Line chart of powers of two showing exponential growth from one to one thousand twenty four',
        xLabel: 'n',
        yLabel: '2ⁿ',
        data: [
          { x: 0, value: 1 },
          { x: 2, value: 4 },
          { x: 4, value: 16 },
          { x: 6, value: 64 },
          { x: 8, value: 256 },
          { x: 10, value: 1024 },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Powers',
      paragraphs: [
        'To raise a base b to an integer exponent n, multiply b by itself n times. So 3⁴ = 3 × 3 × 3 × 3 = 81. For negative exponents the result is the reciprocal of the positive case: 3⁻² = 1 ÷ 3² = 1/9. For fractional exponents, b^(1/n) is the nth root of b: 8^(1/3) = ∛8 = 2.',
        'A worked example: 2¹⁰ = 1,024 (one kilobyte in computing). 5³ = 125. 10⁻² = 0.01. (1.05)²⁰ ≈ 2.653, the growth factor on a 5 percent annual return over 20 years.',
        'A common confusion is the order of operations. The expression −3² is conventionally read as −(3²) = −9, not (−3)² = 9. To avoid mistakes, always wrap negative bases in parentheses when raising them to a power.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Power Result',
      paragraphs: [
        'For positive bases above 1, increasing the exponent grows the result quickly. For positive bases between 0 and 1, increasing the exponent shrinks the result toward zero. For exponent zero, every non-zero base gives 1, by convention and consistency with the rules of exponents.',
        'A common mistake is multiplying when you should be exponentiating. Doubling for 10 days is 10 × 2 = 20, but doubling once a day for 10 days is 2¹⁰ = 1,024, an enormous difference.',
        'Borderline cases include 0⁰, which is conventionally defined as 1 in algebra and computer science but left undefined in some calculus contexts. Negative bases raised to non-integer exponents take you out of the real numbers entirely.',
      ],
    },
    faqs: [
      { question: 'What is the rule for negative exponents?', answer: 'A negative exponent gives the reciprocal of the positive exponent, so b⁻ⁿ = 1 ÷ bⁿ. For example, 5⁻² = 1/25 = 0.04, and 10⁻³ = 0.001.' },
      { question: 'What does a fractional exponent mean?', answer: 'A fractional exponent represents a root: b^(1/n) is the nth root of b, and b^(m/n) is the nth root of b raised to the m. So 27^(2/3) = (∛27)² = 3² = 9.' },
      { question: 'Why is anything to the zero power equal to 1?', answer: 'Powers obey b^(a−a) = b^a ÷ b^a = 1, which forces b⁰ = 1 for any non-zero base. The case 0⁰ is conventionally 1 in algebra but considered undefined in some advanced contexts.' },
      { question: 'How are powers used in the real world?', answer: 'Powers describe compound growth in finance, exponential decay in physics, computer storage in binary, sound intensity in decibels and many other quantities that change by multiplicative factors over time or distance.' },
      { question: 'What is the difference between a power and an exponential function?', answer: 'In a power like x², the exponent is fixed and the base varies. In an exponential function like 2ˣ, the base is fixed and the exponent varies. They behave very differently as the input grows.' },
    ],
  },

  // ─────────────────────────────────────────────── DATE DIFFERENCE
  'date-difference': {
    whatIs: {
      heading: 'What is a Date Difference Calculator?',
      paragraphs: [
        'A date difference calculator finds the gap between two calendar dates, expressed as days, weeks, months or years. The arithmetic relies on the Gregorian calendar, introduced by Pope Gregory XIII in 1582 to correct the drift in the older Julian calendar. Britain and its colonies did not adopt it until 1752, which means dates from earlier periods sometimes need conversion before they can be compared accurately.',
        'It matters because so many obligations and milestones are pinned to dates: contract deadlines, project schedules, visa validity, pregnancy due dates, billing cycles and aging analyses for invoices. A reliable date calculator avoids the off-by-one errors that come from counting leap years and month lengths by hand.',
        'Calendar systems beyond Gregorian still matter for many users. The Islamic Hijri calendar is purely lunar and shorter by about 11 days per year. The Jewish calendar is lunisolar with periodic leap months. The Chinese calendar uses a 60-year sexagenary cycle for traditional dates. A general-purpose date calculator works in Gregorian and converts when needed.',
      ],
      chart: {
        type: 'bar',
        title: 'Days in each month (non-leap year)',
        caption: 'Days as defined by the Gregorian calendar.',
        alt: 'Bar chart of the number of days in each calendar month in a non leap year',
        xLabel: 'Month',
        yLabel: 'Days',
        data: [
          { name: 'Jan', value: 31, color: C.normal },
          { name: 'Feb', value: 28, color: C.warn },
          { name: 'Mar', value: 31, color: C.normal },
          { name: 'Apr', value: 30, color: C.normal },
          { name: 'May', value: 31, color: C.normal },
          { name: 'Jun', value: 30, color: C.normal },
          { name: 'Jul', value: 31, color: C.normal },
          { name: 'Aug', value: 31, color: C.normal },
          { name: 'Sep', value: 30, color: C.normal },
          { name: 'Oct', value: 31, color: C.normal },
          { name: 'Nov', value: 30, color: C.normal },
          { name: 'Dec', value: 31, color: C.normal },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate the Difference Between Two Dates',
      paragraphs: [
        'The cleanest approach is to convert each date to a serial day number, subtract, and then convert the gap back to years, months and days. A common rule is to count the gap as completed years, plus completed months in the partial year, plus remaining days. Leap years and varied month lengths are handled automatically by the calendar.',
        'A worked example: from 15 June 2020 to 30 March 2024 is 3 years, 9 months and 15 days, or 1,384 days in total. From 31 January to 1 March in a non-leap year is 1 month and 1 day, or 29 days, depending on whether you count by completed months or pure days.',
        'A common confusion is whether to include both endpoint dates. In some industries (such as hotel night counts) you exclude the checkout date; in others (such as interest accrual) you include both. Always check the convention before relying on the result for a contract.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Date Difference Result',
      paragraphs: [
        'When the result spans multiple units it is sensible to also note the total in days, since "2 years and 3 months" can mean different exact numbers of days depending on which months are involved. Total days never lies.',
        'A common mistake involves the end-of-month edge case. From 31 March to 30 April some calculators say "1 month, −1 day" while others say "0 months, 30 days." Both are defensible; what matters is being consistent.',
        'Borderline cases include dates before 1582, which need conversion between Julian and Gregorian calendars, and dates that cross the boundary in countries that adopted Gregorian later. For modern dates the calculator is exact.',
      ],
    },
    faqs: [
      { question: 'How are leap years counted?', answer: 'A leap year occurs every year divisible by 4, except for years divisible by 100 unless also divisible by 400. So 2000 was a leap year, 1900 was not, and 2024 is. A date calculator handles all of this automatically.' },
      { question: 'How many days are between two dates?', answer: 'Subtract the start date from the end date in serial day numbers and you get the gap in days. For complex spans, a date difference calculator decomposes the gap into years, months and days as well.' },
      { question: 'Does the calculator include both start and end dates?', answer: 'Most calculators count the difference exclusive of one endpoint, so the result is the number of days between but not including both. Some applications, such as hotel stays or interest accrual, follow different conventions.' },
      { question: 'How do I calculate working days between two dates?', answer: 'Take the total days between the two dates, then subtract weekends and any public holidays. Spreadsheets have functions like NETWORKDAYS that automate this calculation.' },
      { question: 'What is the longest possible date difference a calculator can handle?', answer: 'Most modern date calculators handle dates from at least 1 January 1900 to 31 December 9999, a span of more than 8,000 years and over 2.9 million days, which is far more than any real-life use case requires.' },
    ],
  },

  // ─────────────────────────────────────────────── TIME DURATION
  'time-duration': {
    whatIs: {
      heading: 'What is a Time Duration Calculator?',
      paragraphs: [
        'A time duration calculator finds the gap between two clock times, in hours, minutes and sometimes seconds, optionally crossing midnight. Modern minute-and-second precision in everyday timekeeping is a relatively recent achievement; reliable mechanical clocks with minute hands only became common in Europe in the 17th century, after Christiaan Huygens patented the pendulum clock in 1656.',
        'It matters in payroll, scheduling, billing, exercise tracking and almost any planning task that involves moving between two clock readings. Done by hand, hours-and-minutes arithmetic is famously error-prone because there are 60 minutes per hour rather than 100, breaking the decimal habit of normal subtraction.',
        'Time conventions still differ across regions. The 24-hour clock dominates in continental Europe, the military and aviation worldwide, while the United States and parts of the Commonwealth still default to a 12-hour clock with AM and PM. Daylight saving time, or its absence, can shift a duration by an hour twice a year for users in affected regions.',
      ],
      chart: {
        type: 'bar',
        title: 'Typical time spent on key activities each weekday',
        caption: 'Data source: OECD Time Use Survey averages for working adults.',
        alt: 'Bar chart of average daily hours adults spend on common activities according to the OECD',
        xLabel: 'Activity',
        yLabel: 'Hours per day',
        data: [
          { name: 'Sleep', value: 8.0, color: C.info },
          { name: 'Paid work', value: 8.5, color: C.normal },
          { name: 'Commute', value: 1.0, color: C.warn },
          { name: 'Leisure', value: 4.0, color: C.normal },
          { name: 'Meals', value: 1.5, color: C.info },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Time Duration',
      paragraphs: [
        'Convert both times to minutes since midnight, subtract, and convert the result back to hours and minutes. If the end time is earlier than the start time, the duration crosses midnight and you add 24 × 60 = 1,440 minutes to compensate. The same trick handles dates by adding the number of full days in minutes.',
        'A worked example: from 09:30 to 17:15 is (17 × 60 + 15) − (9 × 60 + 30) = 1,035 − 570 = 465 minutes, which is 7 hours and 45 minutes. From 22:00 on Monday to 06:30 on Tuesday is 8 hours and 30 minutes after compensating for the midnight crossover.',
        'A common confusion is mixing AM/PM with the 24-hour clock. Midnight in the 24-hour system is 00:00 and noon is 12:00, but 12:00 AM in U.S. notation refers to midnight while 12:00 PM refers to noon, which trips up surprisingly many users.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Duration Result',
      paragraphs: [
        'For payroll the duration is typically rounded to the nearest 1, 5 or 15 minutes depending on company policy. For scientific timing the result is kept in fractional hours or even seconds, depending on the precision of the underlying clocks.',
        'A common mistake is failing to deduct unpaid breaks. A nine-hour gap with a one-hour lunch is eight working hours, not nine. Time-tracking apps usually give you a breaks field exactly for this reason.',
        'Borderline situations include multi-day events that cross daylight-saving boundaries, where the total duration in hours is one less or one more than naive arithmetic suggests. International events that span time zones are best handled in UTC throughout.',
      ],
    },
    faqs: [
      { question: 'How do you calculate hours between two times?', answer: 'Convert both times to minutes since midnight, subtract, and divide the result by 60 to get hours, with the remainder as minutes. If the end time is earlier than the start time, add 24 hours first.' },
      { question: 'How do I handle times that cross midnight?', answer: 'When the end time is earlier on the clock than the start time, treat the end time as being on the next day and add 24 hours, or 1,440 minutes, to the calculated duration.' },
      { question: 'How does daylight saving time affect duration?', answer: 'When clocks change forward in spring you lose an hour, and when they change back in autumn you gain one. Durations that span a clock change should be calculated in UTC to avoid confusion.' },
      { question: 'What is decimal time used for?', answer: 'Payroll software and time-tracking tools sometimes express hours as a decimal (1.5 hours instead of 1:30) so they can be added with normal arithmetic. The calculator does the conversion in both directions.' },
      { question: 'Can a duration be negative?', answer: 'Strictly speaking, no, because time only flows forward. Some calculators show a negative duration to flag that the inputs are reversed, in which case swapping start and end gives the correct positive value.' },
    ],
  },

  // ─────────────────────────────────────────────── TIP
  tip: {
    whatIs: {
      heading: 'What is a Tip Calculator?',
      paragraphs: [
        'A tip calculator works out a gratuity for a restaurant or service bill, optionally splitting the total among multiple diners. Tipping has very different cultural roots in different regions: it became routine in the United States after the abolition of slavery, when restaurant owners pushed customers to pay their staff directly rather than absorbing wages. In much of Asia tipping is uncommon and sometimes even refused.',
        'It matters because tipping conventions in the United States have steadily climbed: the unwritten norm rose from 10 percent in the 1950s to 15 percent by the 1980s, 18 percent by the early 2000s and increasingly 20 to 25 percent today. Modern point-of-sale systems often suggest those higher figures by default.',
        'Customs vary widely. In Japan a tip can cause confusion or offence. In France a service charge of 15 percent is automatically included by law, although a small additional pourboire is welcome. In the United Kingdom a 12.5 percent service charge is common in larger restaurants but optional and sometimes removed on request.',
      ],
      chart: {
        type: 'bar',
        title: 'Typical restaurant tip ranges by country',
        caption: 'Data source: travel guides and U.S. National Restaurant Association.',
        alt: 'Bar chart of typical tip percentages on restaurant bills across various countries',
        xLabel: 'Country',
        yLabel: 'Typical tip %',
        data: [
          { name: 'USA', value: 20, color: C.warn },
          { name: 'Canada', value: 18, color: C.warn },
          { name: 'UK', value: 12.5, color: C.normal },
          { name: 'Germany', value: 8, color: C.normal },
          { name: 'France', value: 5, color: C.info },
          { name: 'Japan', value: 0, color: C.info },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate a Tip',
      paragraphs: [
        'Multiply the pre-tax bill by the tip percentage as a decimal: tip = bill × (percent ÷ 100). Add the tip to the bill to get the total, then divide by the number of diners if you are splitting. Whether to tip on the pre-tax or post-tax amount is a personal choice; in lower-tax jurisdictions it makes little difference.',
        'A worked example: a bill of $84 with a 20 percent tip gives a tip of $16.80 and a total of $100.80. Split among four people, each pays $25.20. With an 18 percent tip the total drops to $99.12 and each share to $24.78.',
        'A common confusion is whether to tip on a discounted or coupon-adjusted bill. Standard etiquette is to tip on the pre-discount value, since the server\'s work is unrelated to your discount. Many calculators offer a "tip on subtotal before discount" toggle for this reason.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Tip Result',
      paragraphs: [
        'The total includes the tip, so you can hand the calculated amount over without further math. When splitting unevenly because of different orders, calculate each person\'s share of the bill first, then add a proportional share of the tip.',
        'A common mistake is to tip on the post-tip total when adding a second tip on a card, effectively double-tipping. Always check whether a service charge is already on the bill before adding more.',
        'Borderline situations include large groups, where many U.S. restaurants automatically apply an 18 to 20 percent service charge on tables of six or more. Adding a further tip on top is generous but not expected.',
      ],
    },
    faqs: [
      { question: 'How much should I tip at a restaurant?', answer: 'In the United States the typical tip ranges from 18 to 22 percent of the pre-tax bill. In most of Europe a 5 to 10 percent tip is appreciated, and in much of East Asia tipping is unusual or even discouraged.' },
      { question: 'Should I tip on the pre-tax or post-tax bill?', answer: 'Standard etiquette is to tip on the pre-tax bill, since the tax goes to the government rather than the restaurant. In areas with low sales tax the difference is small enough not to matter much.' },
      { question: 'How do I split a bill with a tip?', answer: 'Add the tip to the bill, then divide by the number of diners. If diners ordered very different amounts, calculate each share of the bill first and add a proportional share of the tip.' },
      { question: 'Do I need to tip if there is a service charge?', answer: 'Generally no, since a service charge already covers gratuity. You may add a small extra tip for exceptional service, but it is not expected.' },
      { question: 'Is it rude not to tip in certain countries?', answer: 'In the United States and Canada, not tipping is widely seen as rude and harms staff who depend on tips for income. In Japan, by contrast, leaving a tip can confuse or even offend service staff.' },
    ],
  },

  // ─────────────────────────────────────────────── DISCOUNT
  discount: {
    whatIs: {
      heading: 'What is a Discount Calculator?',
      paragraphs: [
        'A discount calculator finds the sale price of an item after a percentage reduction, the amount saved, and often the effective unit price after multi-buy offers. The practice of marking down stock to clear inventory has existed for centuries, but the modern percentage-off sale was popularised by U.S. department stores like Wanamaker and Macy\'s in the late 19th century.',
        'It matters because retailers have become extremely sophisticated at framing discounts to maximise perceived value. A "30 percent off plus extra 20 percent at checkout" is not 50 percent off; it is 44 percent off, because the second discount applies to the already-reduced price. A calculator removes the guesswork.',
        'Cultural and legal context varies. EU consumer law requires retailers to display the "lowest price within the past 30 days" alongside the new price, so customers can judge whether a discount is genuine. The United States has weaker rules, which is why advertised "compare at" prices on outlet goods are often inflated reference values.',
      ],
      chart: {
        type: 'bar',
        title: 'Effective price after stacking discounts on a $100 item',
        caption: 'Each percentage applied sequentially to the previous price.',
        alt: 'Bar chart showing effective price after stacking sequential percentage discounts',
        xLabel: 'Discount stack',
        yLabel: 'Final price ($)',
        data: [
          { name: '30% only', value: 70, color: C.normal },
          { name: '30% + 20%', value: 56, color: C.warn },
          { name: '30% + 30%', value: 49, color: C.warn },
          { name: '50% only', value: 50, color: C.warn },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate a Discount',
      paragraphs: [
        'Take the original price and multiply by the discount as a decimal: amount saved = price × (percent ÷ 100). Subtract the saving from the original price to get the sale price. For multiple discounts that stack, apply each one in sequence rather than adding the percentages together.',
        'A worked example: a $80 jacket at 25 percent off saves $20 and costs $60. Stack a further 10 percent member discount and the savings are $20 plus $6 (10 percent of $60), for a final price of $54, not 35 percent off the original.',
        'A common confusion is between "X percent off" and "X percent of." A "25 percent off" sale leaves you paying 75 percent of the original price, while "25 percent of" the original means you only pay a quarter. Tags occasionally mix these phrases and the calculator helps you see which interpretation matches the till.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Discount Result',
      paragraphs: [
        'The final price is what you pay; the savings are what you avoided paying. To judge whether the deal is genuine, compare the original price to the average price the item has been sold at over the past few months, not to a "compare at" reference that may be optimistic.',
        'A common mistake is to compute total saving on multi-buy offers without considering whether you would have bought the extra items anyway. Buying three items to save 30 percent on the third is not a saving if you only needed two.',
        'Borderline situations include "buy one, get one free" promotions, which are mathematically equivalent to a 50 percent discount on each unit only when you actually need both items. Otherwise the effective discount is smaller, sometimes much smaller.',
      ],
    },
    faqs: [
      { question: 'How do I calculate the sale price after a discount?', answer: 'Multiply the original price by the discount as a decimal to find the savings, then subtract from the original price. For example, $50 with a 20 percent discount saves $10, giving a sale price of $40.' },
      { question: 'How do you stack two discounts?', answer: 'Apply them sequentially: take the first discount off the original price, then apply the second to the new lower price. Two stacked discounts are smaller in total than the sum of the percentages would suggest.' },
      { question: 'Is "buy one get one free" the same as 50 percent off?', answer: 'Only if you would have bought two units anyway. If you only needed one, the effective discount is closer to 0 percent, since you ended up spending the same money on twice the goods you wanted.' },
      { question: 'How can I tell if a discount is real?', answer: 'Compare the new price with the typical price the item has sold for in recent months, not just the "compare at" tag. EU regulations require retailers to display the lowest price in the past 30 days for this reason.' },
      { question: 'How do I calculate the percentage saved?', answer: 'Divide the amount saved by the original price and multiply by 100. For example, saving $15 on a $60 item is a 25 percent discount.' },
    ],
  },

  // ─────────────────────────────────────────────── WORK & ENERGY
  'work-energy': {
    whatIs: {
      heading: 'What is a Work and Energy Calculator?',
      paragraphs: [
        'A work and energy calculator applies the basic relationships of mechanics: work equals force times distance, kinetic energy equals one-half mass times velocity squared, and gravitational potential energy equals mass times gravity times height. The formal definition of work as force times displacement was settled by the French mathematician Gustave-Gaspard Coriolis in 1829.',
        'These quantities matter because energy is the universal currency of physics. The same units, joules, describe the energy in food, the kinetic energy of a moving car and the heat radiated by a light bulb. Knowing how to convert between forms gives you a unified mental model for a huge range of problems.',
        'Units are the main regional difference. Most of the world uses joules and watts (1 W = 1 J/s). The United States still uses British thermal units (BTU) and horsepower in some industries; 1 BTU equals about 1,055 J and 1 hp equals about 746 W. Energy on food labels is usually given in kilocalories, where 1 kcal equals 4,184 J.',
      ],
      chart: {
        type: 'bar',
        title: 'Approximate energy in everyday phenomena',
        caption: 'Compiled from physics references; values in joules.',
        alt: 'Bar chart of energy magnitudes for common physical events on a logarithmic scale',
        xLabel: 'Phenomenon',
        yLabel: 'Energy (J)',
        data: [
          { name: 'Apple falling 1 m', value: 1, color: C.info },
          { name: '1 m sprint of 70 kg adult', value: 35, color: C.normal },
          { name: '1 kcal of food energy', value: 4184, color: C.warn },
          { name: 'Car at 100 km/h', value: 580000, color: C.risk },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Work and Energy',
      paragraphs: [
        'Work in joules equals the component of force in the direction of motion multiplied by the distance moved: W = F × d × cosθ. Kinetic energy KE = ½ × m × v². Gravitational potential energy near Earth\'s surface PE = m × g × h with g ≈ 9.81 m/s². Power, the rate of doing work, is energy per time: P = W ÷ t in watts.',
        'A worked example: lifting a 20 kg box 1.5 m straight up costs PE = 20 × 9.81 × 1.5 ≈ 294 J of work against gravity. A 1,200 kg car at 30 m/s carries KE = 0.5 × 1,200 × 30² = 540,000 J of kinetic energy, which is what its brakes have to dissipate to bring it to a stop.',
        'A common confusion is that holding a heavy object stationary costs zero mechanical work, even though it feels strenuous. Work in physics requires displacement; the muscle effort goes into biological processes that do not register on the F × d formula.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Energy Result',
      paragraphs: [
        'Joules are small in human terms, which is why kilojoules (kJ) and megajoules (MJ) appear so often. A typical adult eats around 8 to 10 MJ of food energy per day; a small electric car uses about 0.6 MJ per kilometre.',
        'A common mistake is forgetting that energy is conserved but transformed. The kinetic energy of a falling object becomes heat, sound and deformation when it hits the ground; it does not vanish.',
        'Borderline cases involve very small or very large speeds. At everyday speeds Newtonian mechanics is essentially exact. At speeds approaching the speed of light, kinetic energy follows a relativistic formula and can grow without bound.',
      ],
    },
    faqs: [
      { question: 'What is the formula for kinetic energy?', answer: 'Kinetic energy is KE = ½ × m × v², where m is mass in kilograms and v is speed in metres per second. Doubling speed quadruples kinetic energy, which is why high-speed crashes are so much more destructive than low-speed ones.' },
      { question: 'What is the difference between work and energy?', answer: 'Work is the transfer of energy from one system to another by a force acting through a distance. Energy is the capacity to do work. They share the same unit, the joule, because work is energy in transit.' },
      { question: 'Why does holding a weight feel like work?', answer: 'Mechanically, holding something stationary does no work because there is no displacement. The strain you feel comes from continuous biological work inside your muscles, which costs energy even without external movement.' },
      { question: 'How does energy relate to power?', answer: 'Power is the rate at which work is done or energy is transferred, measured in watts (1 W = 1 J/s). Energy is the integral of power over time, and 1 kilowatt-hour equals 3.6 megajoules.' },
      { question: 'Is potential energy always gravitational?', answer: 'No. Gravitational potential energy is the most common type, but elastic potential energy in a stretched spring, electrical potential energy in a battery and chemical potential energy in food are equally valid forms.' },
    ],
  },

  // ─────────────────────────────────────────────── OHM'S LAW
  'ohms-law': {
    whatIs: {
      heading: 'What is an Ohm\'s Law Calculator?',
      paragraphs: [
        'An Ohm\'s law calculator solves V = I × R for any one of voltage, current and resistance given the other two, and often computes power as P = V × I. The law is named after the German physicist Georg Simon Ohm, who published the relationship in 1827. His work was initially dismissed but is now the foundation of every electrical and electronic system in everyday use.',
        'The law matters because virtually every working circuit depends on it. Resistor selection, fuse sizing, LED current limiting, audio amplifier biasing and household wiring loads all reduce to applications of V = I × R combined with the power equation.',
        'Conventions vary by region. North America standardised on a 120 V mains supply at 60 Hz; most of Europe and Asia uses 230 V at 50 Hz; the U.K. uses 230 V with a tradition of 13 A fused plugs that grew out of post-war copper rationing. The same Ohm\'s law math applies in each case but the safe current and power limits change.',
      ],
      chart: {
        type: 'line',
        title: 'Current vs voltage across a 100 Ω resistor',
        caption: 'Calculated as I = V ÷ R; current is linear in voltage for an ideal resistor.',
        alt: 'Line chart showing current rises linearly with voltage across an ideal one hundred ohm resistor',
        xLabel: 'Voltage (V)',
        yLabel: 'Current (A)',
        data: [
          { x: 0, value: 0 },
          { x: 2, value: 0.02 },
          { x: 4, value: 0.04 },
          { x: 6, value: 0.06 },
          { x: 8, value: 0.08 },
          { x: 10, value: 0.10 },
        ],
      },
    },
    howTo: {
      heading: 'How to Use Ohm\'s Law',
      paragraphs: [
        'The three rearrangements of V = I × R are: V = I × R to find voltage, I = V ÷ R to find current, and R = V ÷ I to find resistance. Power follows from any two of the three: P = V × I = I² × R = V² ÷ R, all in watts.',
        'A worked example: a 9 V battery drives a current through a 220 Ω resistor. Current = 9 ÷ 220 ≈ 0.041 A or 41 mA. Power dissipated in the resistor = V × I = 9 × 0.041 ≈ 0.37 W, which is comfortably within a quarter-watt resistor rating.',
        'A common confusion is mixing AC and DC formulas. Ohm\'s law applies directly to DC and to RMS values in linear AC circuits. For AC circuits with capacitors or inductors, resistance is replaced by impedance, which is frequency-dependent and complex-valued.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Ohm\'s Law Result',
      paragraphs: [
        'Always sanity-check by comparing the calculated current with the rated current of the wire, fuse or component. A small resistor on a high-voltage rail can dissipate enough power to burn out before you blink.',
        'A common mistake is to forget that real wires and connections add their own small resistance. In low-voltage circuits this can be tens of millivolts of drop per metre, which matters for sensitive sensors but not for general-purpose lighting.',
        'Borderline cases include components like LEDs and diodes, which are non-linear and do not obey Ohm\'s law directly. They have a forward voltage that you must subtract from the supply before calculating the current-limiting resistor.',
      ],
    },
    faqs: [
      { question: 'What is Ohm\'s law in simple terms?', answer: 'Ohm\'s law says that the current through a conductor between two points is directly proportional to the voltage across the two points, with resistance as the constant of proportionality, written as V = I × R.' },
      { question: 'How do I calculate resistance from voltage and current?', answer: 'Use R = V ÷ I. For example, a 12 V supply pushing 0.5 A through a component implies a resistance of 12 ÷ 0.5 = 24 ohms.' },
      { question: 'Does Ohm\'s law apply to AC circuits?', answer: 'It applies to AC circuits with purely resistive loads using RMS voltage and current. For circuits with capacitors and inductors, resistance is replaced by impedance, which depends on frequency.' },
      { question: 'Why do LEDs need a current-limiting resistor?', answer: 'LEDs are non-linear and would draw destructive currents if connected directly to a power source. A series resistor uses Ohm\'s law to set the LED current at a safe value, typically 10 to 20 mA.' },
      { question: 'How is power related to Ohm\'s law?', answer: 'Power dissipated in a resistor is P = V × I, which can be rewritten as I² × R or V² ÷ R using Ohm\'s law. These three forms are interchangeable depending on which two quantities you know.' },
    ],
  },

  // ─────────────────────────────────────────────── VOLTAGE
  voltage: {
    whatIs: {
      heading: 'What is a Voltage Calculator?',
      paragraphs: [
        'A voltage calculator computes the voltage across components in series, parallel or voltage-divider circuits, often using Ohm\'s law and Kirchhoff\'s voltage law as building blocks. The unit volt is named after Alessandro Volta, the Italian physicist who built the first true battery, the voltaic pile, in 1800.',
        'Voltage matters because it is the electrical "pressure" that drives current through a circuit. Almost every consumer electronic specification quotes voltage prominently: 5 V for USB, 12 V for a car battery, 230 V for a European mains socket. Knowing how to compute the voltage at any node lets you design or troubleshoot circuits quickly.',
        'Standard mains voltages vary by region. Europe and most of Asia use 220 to 240 V. North America uses 120 V for general outlets and 240 V for heavy appliances. This is why travel adapters need step-up or step-down transformers in addition to plug-shape conversion.',
      ],
      chart: {
        type: 'bar',
        title: 'Common household voltage standards',
        caption: 'Data source: IEC and national grid reference voltages 2024.',
        alt: 'Bar chart of standard household alternating current voltages by country',
        xLabel: 'Country',
        yLabel: 'Mains voltage (V)',
        data: [
          { name: 'USA', value: 120, color: C.info },
          { name: 'Japan', value: 100, color: C.info },
          { name: 'UK', value: 230, color: C.normal },
          { name: 'India', value: 230, color: C.normal },
          { name: 'EU', value: 230, color: C.normal },
          { name: 'Australia', value: 230, color: C.normal },
        ],
      },
    },
    howTo: {
      heading: 'How to Calculate Voltage',
      paragraphs: [
        'For a single resistor with current I and resistance R, voltage V = I × R. For resistors in series the same current flows through all of them, so the total voltage is the sum of the individual voltage drops. For a voltage divider with two resistors in series across a supply, the voltage across the lower resistor is V × R₂ ÷ (R₁ + R₂).',
        'A worked example: a 9 V battery drives a series combination of a 1 kΩ and a 2 kΩ resistor. Total resistance = 3 kΩ, current = 9 ÷ 3,000 = 3 mA. Voltage across the 2 kΩ resistor = 3 mA × 2 kΩ = 6 V. Across the 1 kΩ resistor = 3 V. They sum to the supply voltage as expected.',
        'A common confusion is mixing peak and RMS voltage in AC. A 230 V RMS mains supply has a peak voltage of 230 × √2 ≈ 325 V. Insulation ratings on AC components must withstand the peak, not just the RMS.',
      ],
    },
    understanding: {
      heading: 'Understanding Your Voltage Result',
      paragraphs: [
        'Voltage is always relative to a reference point, usually labelled "ground" or "0 V" in a circuit diagram. A reading of 5 V at one node only means anything once you know the reference; in industrial systems you sometimes have multiple grounds and have to pay attention.',
        'A common mistake is to assume that if no current flows, no voltage exists. The voltage across an open switch can be the full supply voltage even though no current is flowing through it.',
        'Borderline situations include high-voltage low-current sources like a Van de Graaff generator, which can carry thousands of volts but with negligible energy, and low-voltage high-current sources like a car battery, which can deliver hundreds of amps despite only 12 V.',
      ],
    },
    faqs: [
      { question: 'What is voltage in simple terms?', answer: 'Voltage is the electrical potential difference between two points, often described as the "pressure" that pushes electric charge through a circuit. It is measured in volts and named after the Italian physicist Alessandro Volta.' },
      { question: 'How do I calculate voltage drop across a resistor?', answer: 'Use Ohm\'s law: V = I × R, where I is the current through the resistor in amps and R is its resistance in ohms. The result is the voltage drop in volts across that resistor.' },
      { question: 'What is a voltage divider?', answer: 'A voltage divider is two resistors in series across a supply voltage. The voltage across the lower resistor is V × R₂ ÷ (R₁ + R₂), which is useful for scaling sensor signals or providing reference voltages.' },
      { question: 'What is the difference between AC and DC voltage?', answer: 'DC voltage is constant in time, like a battery. AC voltage alternates direction and magnitude, typically as a sine wave. Most household power is AC because it is easier to transmit over long distances.' },
      { question: 'Why is mains voltage different in different countries?', answer: 'Standards diverged in the early 20th century for historical and industrial reasons. North America standardised at 120 V to reduce shock risk, while Europe chose 230 V to lower transmission losses. Both systems work safely when properly designed.' },
    ],
  },
};

// Lightweight default deep content for tools without a hand-written entry yet.
// Uses generic but tool-specific text built from key + a short description.
export const buildDefaultDeep = (
  key: string,
  niceName: string,
  shortDescription: string,
): DeepContent => ({
  whatIs: {
    heading: `What is the ${niceName}?`,
    paragraphs: [
      `The ${niceName} is a focused online tool that ${shortDescription.toLowerCase()} It removes the friction of manual arithmetic and helps you compare scenarios side by side without opening a spreadsheet.`,
      `The math behind this calculator is well established and used routinely in finance, science and everyday planning. Where appropriate, the tool follows the conventions documented by the U.S. National Institute of Standards and Technology, the World Health Organization, or the relevant industry body, so the numbers it produces are consistent with what professionals would calculate by hand.`,
      `Like any single-number tool, the ${niceName} is most useful when treated as a starting point. Use it to get a clear baseline, then layer in the personal context, regional rules, or expert advice that the calculator cannot know about on its own.`,
    ],
  },
  howTo: {
    heading: `How to Use the ${niceName}`,
    paragraphs: [
      `Enter the values requested by the form, paying attention to units. Most fields accept either metric or imperial measurements; the calculator converts automatically and shows the formula it applied so you can verify the result against your own working.`,
      `When more than one input drives the answer, change one variable at a time. This sensitivity check shows how strongly the result depends on each input, which is more revealing than a single number on its own. It is also a quick way to spot data entry mistakes.`,
      `Edge cases worth knowing include very small inputs that round down to zero, very large inputs that exceed practical scenarios, and values that depend on regional rules such as tax brackets, interest conventions or unit definitions. When in doubt, cross-check with an authoritative source for your country.`,
    ],
  },
  understanding: {
    heading: `Understanding Your Result`,
    paragraphs: [
      `The headline number is best read in context. A result that looks unusually high or low almost always traces back to a unit mix-up or a missing input rather than a real anomaly. Always sanity-check by trying a slightly different input and seeing whether the answer moves in the direction you expect.`,
      `Most calculators of this type are designed for typical scenarios. If your situation is unusual, professional or regulated, treat the output as informational and confirm the figure with a qualified specialist before relying on it for an important decision.`,
      `Finally, remember that small differences in the result are often within the noise of the underlying data. Two answers that differ by less than a few percent are usually not meaningfully different in practical terms.`,
    ],
  },
  faqs: [
    { question: `Is the ${niceName} accurate?`, answer: `Yes, the calculator implements the standard formula precisely and rounds the answer to a reasonable number of decimal places. Any apparent discrepancy with a manual calculation usually comes from rounding intermediate values rather than an error in the tool.` },
    { question: `Is the ${niceName} free to use?`, answer: `Yes, all calculators on this site are free, do not require an account and do not store your inputs. You can use the tool as many times as you need without any quota.` },
    { question: `Does the ${niceName} work on mobile?`, answer: `Yes, every calculator on the site is mobile responsive. The layout, charts and inputs adapt automatically to phone and tablet screens, so you can run quick calculations on the go without zooming or scrolling sideways.` },
    { question: `Can I rely on this calculator for legal or medical decisions?`, answer: `No. The ${niceName} is built for educational and informational use only. For any legally binding or health-critical decision, please consult a qualified professional who can take your full context into account.` },
    { question: `How do I report a problem with the ${niceName}?`, answer: `If you spot an unexpected result or want to suggest an improvement, please use the contact form on this site. We review every message and update calculators when issues are confirmed.` },
  ],
});
