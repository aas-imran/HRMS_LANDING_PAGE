'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const BlogPost = () => {
  const router = useRouter();
  const params = useParams();
  
  const blogPosts = [
    {
      id: 1,
      title: 'Top Challenges HR Managers Face and How HRMS Solves Them',
      image: '/hr.jpg',
      category: 'HR/Technology',
      content: [
        {
          heading: '1. Endless Administrative Tasks',
          text: ' This is the reality for many HR professionals today The role of HR is no longer just administrative; it\'s about engagement, compliance, and data-driven decision-making. Yet, challenges keep piling up. That\'s where a Human Resource Management System (HRMS) becomes a powerful ally.'
        },
        {
          heading: '2.Struggling with Employee Engagement ',
          text: 'Manual processes like attendance tracking, payroll calculations, and leave approvals consume hours. For Simran, automation through an HRMS turned these tasks into a few clicks, freeing her to focus on employee growth and retention.'
        },
        {
          heading: '3. Compliance Headaches',
          text: 'In hybrid workplaces, keeping employees motivated isn\'t easy. Simran once relied on yearly surveys, but they barely scratched the surface. With HRMS-driven analytics and feedback tools, she could spot engagement gaps in real time and take action before issues escalated.'
        },
        {
          heading: '4. Lack of Data-Driven Insights',
          text: 'Simran once struggled with scattered data across payroll, attendance, and compliance files. With HRMS, these workflows feed into a single system—automating reports, triggering timely alerts, and turning data into actionable insights that keep her company compliant and proactive.'
        },
        {
          heading: '5.Scaling with Growth ',
          text: 'Before HRMS, decisions were based on guesswork. Today, Simran uses HRMS dashboards to analyse attrition trends, identify skill gaps, and forecast workforce needs—making HR a true strategic partner in business growth.'
        },
        {
          heading: ' Conclusion',
          text: 'As her company expanded, managing a larger workforce manually was impossible. A cloud-based HRMS scaled effortlessly, keeping processes smooth whether she was managing 50 employees or 5,000.'
        }
      ],
      intro: 'When Simran, an HR manager at a fast-growing startup, logs in each morning, her day begins with a flood of leave requests, payroll queries, and compliance updates. By the time she\'s done juggling spreadsheets and emails, there\'s hardly any room left for what truly matters—building a stronger workplace culture.',
      conclusion: 'For HR managers like Simran, these challenges don\'t disappear—but with HRMS, they no longer define the job. Instead of drowning in administration, HR leaders can finally focus on what matters most: people, performance, and progress.',
      author: 'Imran Ansari',
      place: 'Cuttack',
      date: '29/08/2025'
    },
    {
      id: 2,
      title: 'Employee Benefits and Payroll Management: Why Automation Matters',
      image: '/benefit.jpg',
      category: 'Employee Benefits',
      intro: 'When we talk about payroll management, the question isn\'t whether it\'s important - it\'s why it\'s still one of the most complex and error-prone processes inside organizations. Why do HR teams, despite having clear policies and structured benefits, still struggle every month to deliver accurate salaries on time?',
      content: [
        {
          heading: '',
          text: 'Payroll isn\'t just about cutting paychecks - it pulls data from attendance, overtime, tax regulations, bonuses, and benefits like insurance or retirement contributions. Each of these workflows often sits in isolation, leaving HR professionals to reconcile them manually. The result? Errors, delays, compliance risks, and frustrated employees.',
        },
        {
          heading: '',
          text: '<span className="font-bold text-black">So how do we solve this?</span> The answer lies in automation. An HRMS with payroll automation integrates data from every workflow into a single system. Leave requests directly adjust salary. Benefit contributions are automatically factored in. Compliance updates trigger alerts without manual chasing. Instead of stitching spreadsheets together, HR leaders have one source of truth that runs payroll accurately, transparently, and on time.',
        },
        {
          text: 'And whats the ultimate goal? It\'s not just efficiency—it\'s trust and strategic growth. When employees see that salaries and benefits are handled flawlessly, confidence in the organization rises. When HR no longer spends hours on repetitive calculations, they can focus on building policies, driving engagement, and shaping the future workforce.'
        }
      ],
      conclusion: 'In short, automated payroll management isn\'t about replacing HR—it\'s about empowering them. It transforms payroll from a monthly burden into a strategic advantage, where accuracy, compliance, and employee satisfaction work hand in hand.',
      author: 'Ashish Kumar Sahoo',
      place: 'Bhubaneswar',
      date: '01/09/2025'
    },
    {
      id: 3,
      title: 'Why Mental Health Should Be a Priority in HR Strategies',
      image: '/mental.jpg',
      category: 'Mental Health',
      intro: 'When we talk about workplace performance, we often think about salaries, perks, and promotions. But beneath it all lies a factor that silently shapes productivity—employee mental health. Recent studies are sounding the alarm, and the numbers paint a story no HR leader can ignore.',
      content: [
        {
          heading: 'The Indicators We Can\'t Overlook',
          text: ' The World Health Organization estimates that depression and anxiety cause 12 billion lost workdays annually, costing employers nearly USD 1 trillion in productivity. In India alone, poor employee mental health is costing companies about $14 billion every year, driven by absenteeism, reduced performance, and higher turnover. These aren\'t just numbers—they\'re signals of a workforce under strain.',
        },
        {
          text: 'Even more concerning, a global survey by Ipsos and Teladoc Health found that 82% of employees with diagnosed mental health conditions do not disclose them at work, fearing stigma or career setbacks. When silence prevails, organizations lose visibility into one of the biggest factors affecting retention and engagement.'
        },
        {
          heading: 'What These Numbers Tell Us',
          text: ' These statistics point to a clear truth: mental health is no longer a private issue—it\'s a business issue. Lost productivity, hidden struggles, and burnout aren\'t just hurting individuals; they are slowing down entire organizations. If employees don\'t feel safe to speak up, they quietly disengage—or worse, they leave.'
        },
        {
          heading: 'What HR Can Do Differently',
          text: ' Embed mental health into HR strategy as a priority equal to payroll or compliance. Build psychological safety where employees can speak openly. Train managers to recognize early signs of stress and burnout. Offer structured support like Employee Assistance Programs, counselling access, and flexible schedules. Use HRMS tools to measure engagement and detect trends early.'
        },
        {
          heading: 'The Goal Ahead',
          text: ' Ultimately, making mental health a priority isn\'t only about preventing burnout—it\'s about creating workplaces where people thrive. When employees trust that their well-being matters, they are more engaged, more loyal, and more productive. For HR leaders, this is not just a responsibility—<span className="font-bold text-black">it\'s an opportunity to transform mental health from a silent drain into a source of strength.</span>'
        }
      ],
      conclusion: '',
      author: 'Swagat Nayak',
      place: 'Puri',
      date: '05/09/2025'
    }
  ];

  const post = blogPosts.find(post => post.id === parseInt(params.id));

  if (!post) {
    router.push('/blog');
    return null;
  }

  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link 
          href="/blog"
          className="inline-flex items-center text-[#a89456] hover:underline mb-8 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <div className="relative w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={900}
            height={300}
            className="w-full h-[400px] object-cover"
            style={{ backgroundColor: '#f3f4f6' }}
            priority
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            {/* Category Chip */}
            <div className="mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                post.category === 'HR/Technology' ? 'bg-blue-100 text-blue-800' :
                post.category === 'Employee Benefits' ? 'bg-green-100 text-green-800' :
                post.category === 'Mental Health' ? 'bg-purple-100 text-purple-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[#111826] mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-500 text-sm space-x-4">
              <span className="flex items-center">
                <FaUser className="h-5 w-5 mr-2 text-[#a89456]" />
                Author : {post.author}
              </span>
              <span>•</span>
              <span>{post.place}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>

          {post.intro && (
            <p className="text-gray-700 mb-8 leading-relaxed text-xl">
              {post.intro}
            </p>
          )}

          <div className="space-y-12">
            {post.content.map((section, index) => (
              <section key={index} className="mb-12">
                {section.heading && (
                  <h3 className="text-2xl font-bold mb-4 text-[#111826]">
                    {section.heading}
                  </h3>
                )}
                <p 
                  className="text-gray-700 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              </section>
            ))}
          </div>

          {post.conclusion && (
            <p className="text-gray-700 mt-12 leading-relaxed text-lg">
              {post.conclusion}
            </p>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-end mt-16 space-x-4">
            {post.id > 1 && (
              <Link 
                href={`/blog/${post.id - 1}`}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
              >
                <FaArrowLeft className="mr-2" /> Previous
              </Link>
            )}
            {post.id < blogPosts.length && (
              <Link 
                href={`/blog/${post.id + 1}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#a89456] hover:bg-[#8a7845] transition duration-150 ease-in-out"
              >
                Next <FaArrowRight className="ml-2" />
              </Link>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;