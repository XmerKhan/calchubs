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
