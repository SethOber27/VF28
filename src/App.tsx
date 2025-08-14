import React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import {
  ArrowRight,
  Mail,
  Moon,
  Sun,
  Linkedin,
  Star,
  Send,
  ArrowLeft,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Button } from "./components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Textarea } from "./components/ui/Textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { toast, Toaster } from "sonner";

// Placeholder images
const aiForAllLogo = "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=AI+For+All";
const profileImage = "https://via.placeholder.com/400x400/2563eb/ffffff?text=Seth+Jensen";
const itilLogo = "https://via.placeholder.com/100x100/64748b/ffffff?text=ITIL";

// Utils
const cx = (...c: any[]) => c.filter(Boolean).join(" ");

const NAV = [
  { id: "hero", label: "Home" },
  { id: "stats", label: "Quick Stats" },
  { id: "highlights", label: "Highlights" },
  { id: "customer-quotes", label: "Reviews" },
  { id: "brands", label: "Brands I've Managed" },
  { id: "experience", label: "Experience" },
  { id: "aiforall", label: "AI For All" },
  { id: "certifications", label: "Certifications" },
  { id: "leave-review", label: "Leave Review" },
  { id: "contact", label: "Contact" },
];

// Stats with expandable details
const stats = [
  {
    k: "Awards",
    v: "Top rated CSAM of FY24\n3x CSAM of the month",
    details:
      "Top rated CSAM of FY24 - achieved highest managerial rating in a 450‑person org. CSAM of the Month recognition in Mar '24, Jan '25, May '25.",
  },
  {
    k: "$27M",
    v: "multi-level One Microsoft deal",
    details:
      "3 year deal agreement with client after cross-functional sales teams sold a 3 part $27 million deal across Azure, M365 EA and Unified Support.",
  },
  {
    k: "$30M/5yr",
    v: "commitment preserved",
    details:
      "Received/preserved a $30M five‑year commitment as onboarding CSAM for a startup and recovered at‑risk spend across portfolio.",
  },
  {
    k: "100+",
    v: "renewals owned",
    details:
      "Responsible for 100+ renewals across mid‑market & startups; standardized forecasting, QBRs, and adoption playbooks.",
  },
];

// Highlights blocks
const highlights = [
  {
    title: "Contract Conversion",
    k: "78%",
    detail:
      "of customers converted from single year to multi-year contracts",
  },
  {
    title: "FY24 Bonus",
    k: "200%",
    detail: "Awarded 200% bonus in FY24 for outperformance.",
  },
  {
    title: "FY25 Bonus",
    k: "120%",
    detail: "Awarded 120% bonus in FY25.",
  },
  {
    title: "Portfolio Growth",
    k: "3×",
    detail:
      "Grew portfolio 3× in 3 years through strategic account management.",
  },
];

// Certifications
const certifications = [
  {
    title: "Security, Compliance, and Identity Fundamentals",
    code: "SC-900",
    provider: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    verificationUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/SethJensen-2216/C7A0411AF165AC95?sharingId=4CAD3405D673049",
  },
  {
    title: "Microsoft 365 Fundamentals",
    code: "MS-900",
    provider: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    verificationUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/SethJensen-2216/6414E2798F79C237?sharingId=4CAD3405D673049",
  },
  {
    title: "AI Fundamentals",
    code: "AI-900",
    provider: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    verificationUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/SethJensen-2216/42881A1745B197CA?sharingId=4CAD3405D673049",
  },
  {
    title: "ITIL v3 Foundation",
    code: "ITIL v3",
    provider: "ITIL",
    logo: itilLogo,
  },
];

const brands = [
  {
    name: "ClickHouse",
    url: "https://clickhouse.com/",
    logo: "https://via.placeholder.com/100x100/1e40af/ffffff?text=ClickHouse",
  },
  {
    name: "UnitedHealthcare",
    url: "https://www.uhc.com/",
    logo: "https://via.placeholder.com/100x100/1d4ed8/ffffff?text=UHC",
  },
  {
    name: "Mercy Health",
    url: "https://www.mercy.com/",
    logo: "https://via.placeholder.com/100x100/2563eb/ffffff?text=Mercy+Health",
  },
  {
    name: "Hitachi",
    url: "https://www.hitachi.com/",
    logo: "https://via.placeholder.com/100x100/3b82f6/ffffff?text=Hitachi",
  },
  {
    name: "Replit",
    url: "https://replit.com/",
    logo: "https://via.placeholder.com/100x100/60a5fa/ffffff?text=Replit",
  },
  {
    name: "Inspire Medical",
    url: "https://www.inspiresleep.com/",
    logo: "https://via.placeholder.com/100x100/93c5fd/ffffff?text=Inspire",
  },
  {
    name: "NationsBenefits",
    url: "https://nationsbenefits.com/",
    logo: "https://via.placeholder.com/100x100/bfdbfe/ffffff?text=Nations",
  },
  {
    name: "Towbook",
    url: "https://towbook.com/",
    logo: "https://via.placeholder.com/100x100/dbeafe/ffffff?text=Towbook",
  },
  {
    name: "Datex",
    url: "https://www.datexcorp.com/",
    logo: "https://via.placeholder.com/100x100/eff6ff/ffffff?text=Datex",
  },
  {
    name: "OnboardMeetings.com",
    url: "https://onboardmeetings.com/",
    logo: "https://via.placeholder.com/100x100/f1f5f9/ffffff?text=Onboard",
  },
  {
    name: "Doma",
    url: "https://www.doma.com/",
    logo: "https://via.placeholder.com/100x100/f8fafc/ffffff?text=Doma",
  },
  {
    name: "Ammo Inc.",
    url: "https://gunbroker.com/",
    logo: "https://via.placeholder.com/100x100/ffffff/000000?text=Ammo+Inc",
  },
  {
    name: "Centennial CO",
    url: "https://www.centennialco.gov/",
    logo: "https://via.placeholder.com/100x100/1e293b/ffffff?text=Centennial",
  },
  {
    name: "Delray Beach FL",
    url: "https://www.delraybeachfl.gov/",
    logo: "https://via.placeholder.com/100x100/0f172a/ffffff?text=Delray+Beach",
  },
  {
    name: "Legrand",
    url: "https://www.legrand.com/",
    logo: "https://via.placeholder.com/100x100/1e40af/ffffff?text=Legrand",
  },
];

const experiences = [
  {
    company: "Microsoft",
    role: "Sr. Customer Success Account Manager – Team Lead & Pre‑Sales Lead CSAM for Startups",
    dates: "2024–2025",
    bullets: [
      "Responsible for tracking 100+ accounts and acting as the escalation CSAM for high-risk accounts, directly leading scoping and resolution with customers.",
      "Mentored 40+ CSMs and directly led 15 CSMs.",
    ],
  },
  {
    company: "Microsoft",
    role: "Customer Success Account Manager",
    dates: "2022–2024",
    bullets: [
      "Led complex, multi‑product customer journeys across SaaS, cloud & AI.",
      "Specialized in adoption, growth, renewal across 60+ products.",
    ],
  },
  {
    company: "InvestCloud, Inc.",
    role: "Project Manager",
    dates: "2021–2022",
    bullets: [
      "Delivered white‑labeled fintech platforms across CRM, client portal, and data layers for advisory firms.",
      "Facilitated onboarding workshops, feedback sessions, and UAT to drive adoption and early value.",
    ],
  },
  {
    company: "Insight Enterprises",
    role: "Project Manager / Consultant (PMO Lead)",
    dates: "2015–2021",
    bullets: [
      "PMO Lead: standardized governance, reporting, and delivery frameworks across consulting engagements.",
      "Implemented Microsoft Teams division‑wide; led change management, training, and process integration.",
      "Delivered enterprise modern workplace & cloud initiatives with cross‑functional teams.",
      "Maintained stakeholder communication plans to ensure transparency and alignment.",
    ],
  },
];

// Reviews data structure
const customerQuotes = [
  {
    id: "customer-1",
    category: "Customer",
    author: "Doma, IT manager feedback to MS Leadership",
    quote:
      "I wanted to let you know about outstanding service that Seth has provided Doma over the past several months since he's joined us as a CSM. He's gone above and beyond to work with us to resolve several issues… and he's at least doubled the efforts that previous CSMs had provided us. He has assisted with transferring licenses during a merger, provided expert security engineering support to our cybersecurity team, and helped us navigate Azure and Microsoft as a whole.",
    type: "original",
  },
  {
    id: "customer-2",
    category: "Customer",
    author: "Towbook CEO",
    quote:
      "I would not have continued with a multi-year deal if I had known you were no longer going to be at Microsoft.",
    type: "original",
  },
  {
    id: "customer-3",
    category: "Customer",
    author: "Datex CIO",
    quote:
      "Seth- a huge thank you for making this happen. Getting MS resources to highlight our conference with insightful presentations was key and has sparked a lot of positive feedback from our customers.",
    type: "original",
  },
];

const managerQuotes = [
  {
    id: "manager-1",
    category: "Manager",
    author: "Nov 2024 Manager Feedback",
    quote:
      "Your readiness to support colleagues through significant renewals and your ability to handle high-pressure situations — jumping into last-minute conversations with clients with grace and efficiency — make a significant positive impact on the team.",
    type: "original",
  },
  {
    id: "manager-2",
    category: "Manager",
    author: "May 2024 Manager Comment",
    quote:
      "One major high-impact exercise you ran this period was conducting MBRs for your POD, encouraging an open and safe environment for the team to share experiences and results. I have received praises from all your POD members on the work you have done with them and how supportive you are in their work as CSAMs.",
    type: "original",
  },
  {
    id: "manager-3",
    category: "Manager",
    author: "Jihad Al-Hazineh, Manager, July 25",
    quote:
      "I'm deeply grateful for everything Seth brought to our team. When we asked him to help build a new delivery team, we knew it would take grit, clarity, and a whole lot of heart. Seth brought all of that—and more. He didn't just step in; he stepped up. He brought structure, consistency, and leadership to a space that truly needed it. He helped shape a team culture that exceeded every expectation, and I couldn't be prouder of what we created together.",
    type: "original",
  },
];

const teammateQuotes = [
  {
    id: "teammate-1",
    category: "Teammate",
    author: "Dustin Sawicki, CSA",
    quote:
      "I have had the pleasure of having Seth as a CSAM with them for about 9 months. He has been an invaluable resource for me as I am the sole owner of the account. His ability to help scale and pull the resources to allow the customer to maintain their growth is amazing. He truly is a rock star and will be missed on the account.",
    type: "original",
  },
  {
    id: "teammate-2",
    category: "Teammate",
    author: "Alance Jacob (M365 Copilot Engineer)",
    quote:
      "What sets Seth apart is his genuine passion for helping his customers. He is a true partner in every sense of the word, and his dedication to working alongside his customers to help them achieve their goals is evident in everything he does. I look forward to our continued work together and am excited to see what we can achieve as a team.",
    type: "original",
  },
  {
    id: "teammate-3",
    category: "Teammate",
    author: "Kenda Haki (vCSAM, Spotlight submission)",
    quote:
      "Incredible mentorship provided for the past 3 months… always available for questions and willing to share their experience with exceptional kindness and patience… It's an honor to have this opportunity to learn from them and to work closely with both Seth and Amanda, looking forward to continuing this journey of learning and growth together.",
    type: "original",
  },
  {
    id: "teammate-4",
    category: "Teammate",
    author: "Arush Saxena, CSA",
    quote:
      "Seth is amazing to work with. The thing I most value… is his exceptional organizational skills and deep empathy for our customers… Thank you for your hard work and dedication. Your contributions significantly enhance our team's performance and customer satisfaction.",
    type: "original",
  },
];

const allQuotes = [
  ...customerQuotes,
  ...managerQuotes,
  ...teammateQuotes,
];

// Animated Number Component
function AnimatedNumber({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });
  const [displayValue, setDisplayValue] = React.useState("0");

  React.useEffect(() => {
    if (!isInView) return;

    // Parse the value to determine animation type
    const isMultiplier = value.includes("×");
    const isPercentage = value.includes("%");

    if (isMultiplier) {
      // For 3×, extract the number and animate with bounce
      const number = parseInt(value.replace("×", ""));
      
      setTimeout(() => {
        let current = 0;
        const increment = number / 60; // 60 frames over 3 seconds
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            current = number;
            clearInterval(timer);
          }
          setDisplayValue(Math.round(current) + "×");
        }, 50); // 50ms per frame
      }, delay);
    } else if (isPercentage) {
      // For percentages, extract the number and animate
      const number = parseInt(value.replace("%", ""));
      
      setTimeout(() => {
        let current = 0;
        const increment = number / 60; // 60 frames over 3 seconds
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            current = number;
            clearInterval(timer);
          }
          setDisplayValue(Math.round(current) + "%");
        }, 50); // 50ms per frame
      }, delay);
    } else {
      // For other values, animate from 0 to the target
      const number = parseInt(value.replace(/[^\d]/g, ""));
      if (!isNaN(number)) {
        setTimeout(() => {
          let current = 0;
          const increment = number / 60; // 60 frames over 3 seconds
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
              current = number;
              clearInterval(timer);
            }
            setDisplayValue(Math.round(current).toString());
          }, 50); // 50ms per frame
        }, delay);
      } else {
        // If not a number, just set the value directly
        setTimeout(() => {
          setDisplayValue(value);
        }, delay);
      }
    }
  }, [isInView, value, delay]);

  const isMultiplier = value.includes("×");

  return (
    <motion.div
      ref={ref}
      className="text-3xl font-extrabold leading-none"
      animate={
        isInView && isMultiplier
          ? {
              scale: [0.8, 1.1, 1],
              rotate: [0, 2, 0],
            }
          : {}
      }
      transition={
        isMultiplier
          ? {
              duration: 3,
              delay: delay,
              type: "spring",
              damping: 15,
              stiffness: 200,
            }
          : {}
      }
    >
      {displayValue}
    </motion.div>
  );
}

function StatCard({ stat }: { stat: any }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/60 hover:shadow-md transition p-6 flex flex-col h-[160px] overflow-hidden"
      >
        {/* Title - Fixed height */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent h-[36px] flex items-center leading-none">
          {stat.k}
        </div>
        
        {/* Description area - Fixed height with overflow handling */}
        <div className="text-sm text-slate-700 dark:text-slate-200 whitespace-pre-line h-[60px] flex items-start mt-2 overflow-hidden">
          <div className="line-clamp-3">{stat.v}</div>
        </div>
        
        {/* Footer - Fixed height */}
        <div className="text-xs font-medium text-blue-800 dark:text-amber-300 flex items-center gap-1 h-[24px] mt-auto">
          Click for details
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            ▼
          </motion.div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div className="details-card rounded-2xl mt-2 p-4 border border-blue-200/50 dark:border-slate-600/50 bg-blue-50/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <div className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed">
            {stat.details}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Leave Review Form Component
function LeaveReviewForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = React.useState({
    author: "",
    category: "",
    quote: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [justSubmitted, setJustSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.author ||
      !formData.category ||
      !formData.quote
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form after successful submission
      setFormData({ author: "", category: "", quote: "" });
      setJustSubmitted(true);

      // Reset the success state after a delay
      setTimeout(() => setJustSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      className={`transition-all duration-300 ${justSubmitted ? "ring-2 ring-green-500 ring-offset-2" : ""}`}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {justSubmitted ? (
            <>
              <div className="h-5 w-5 text-green-500">✓</div>
              Review Submitted Successfully!
            </>
          ) : (
            <>
              <Star className="h-5 w-5 text-amber-500" />
              Leave a Review
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="author">Your Name & Title</Label>
              <Input
                id="author"
                type="text"
                placeholder="e.g. John Smith, CTO at TechCorp"
                value={formData.author}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    author: (e.target as HTMLInputElement).value,
                  })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select relationship..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Customer">
                    Customer
                  </SelectItem>
                  <SelectItem value="Manager">
                    Manager
                  </SelectItem>
                  <SelectItem value="Teammate">
                    Teammate
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="quote">Your Review</Label>
            <Textarea
              id="quote"
              placeholder="Share your experience working with Seth..."
              value={formData.quote}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  quote: (e.target as HTMLTextAreaElement).value,
                })
              }
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>Submitting...</>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Submit Review
              </>
            )}
          </Button>
        </form>
        <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          {justSubmitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 dark:text-green-400 flex items-center gap-2"
            >
              <span>🎉</span>
              Your review is now live and visible to all
              visitors!
            </motion.p>
          ) : (
            <p>
              Share your experience working with Seth. Your
              review will be published immediately and help
              others understand his professional impact.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function App() {
  const [dark, setDark] = React.useState(
    () =>
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );
  const [connectModalOpen, setConnectModalOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("portfolio");
  const [userReviews, setUserReviews] = React.useState<any[]>([]);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Load user reviews from localStorage on mount
  React.useEffect(() => {
    try {
      const savedReviews = localStorage.getItem("seth-jensen-reviews");
      if (savedReviews) {
        const parsedReviews = JSON.parse(savedReviews);
        console.log("Loaded reviews from localStorage:", parsedReviews);
        setUserReviews(parsedReviews);
      } else {
        console.log("No reviews found in localStorage");
      }
    } catch (error) {
      console.error("Error loading reviews from localStorage:", error);
      setUserReviews([]);
    }
  }, []);

  // Handle review submission with auto-approval
  const handleReviewSubmission = (reviewData: any) => {
    console.log("Submitting review:", reviewData);

    const reviewId = `user-${Date.now()}`;
    const reviewWithId = {
      ...reviewData,
      id: reviewId,
      submittedAt: new Date().toISOString(),
      type: "user-submitted",
      approved: true,
    };

    console.log("Review with metadata:", reviewWithId);

    // Auto-approve and add to localStorage immediately
    const updatedReviews = [...userReviews, reviewWithId];
    console.log("Updated reviews array:", updatedReviews);

    try {
      setUserReviews(updatedReviews);
      localStorage.setItem("seth-jensen-reviews", JSON.stringify(updatedReviews));
      console.log("Successfully saved to localStorage");

      // Show success message with option to view all reviews
      toast.success(
        <div className="flex flex-col gap-2">
          <p>🎉 Thank you! Your review is now live.</p>
          <button
            onClick={() => {
              console.log("Navigating to reviews page");
              setCurrentPage("reviews");
              toast.dismiss();
            }}
            className="text-xs text-blue-600 hover:text-blue-800 underline self-start"
          >
            View all reviews →
          </button>
        </div>,
      );
    } catch (error) {
      console.error("Error saving review:", error);
      toast.error("Failed to save review. Please try again.");
    }
  };

  // Combine original quotes with user-submitted reviews for the reviews page ONLY
  // Main portfolio page shows only original quotes, reviews page shows everything
  const allReviewsData = React.useMemo(() => {
    const combined = [...allQuotes, ...userReviews];
    console.log("Combined reviews data:", combined);
    return combined;
  }, [userReviews]);

  const active = useActiveSection(NAV.map((n) => n.id));
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  React.useEffect(() => {
    console.log("Rendering Experience section with", experiences.length, "experiences");
  }, [experiences]);

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="min-h-screen text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-950 relative overflow-x-clip">
        <style>{`
        @keyframes floatBg {
          0% { background-position: 0% 0%, 100% 50%, 50% 100%; }
          50% { background-position: 50% 50%, 50% 50%, 50% 50%; }
          100% { background-position: 0% 0%, 100% 50%, 50% 100%; }
        }
        /* Professional, muted blue primary with subtle orange accents */
        .animated-gradient {
          background: radial-gradient(1200px 600px at 10% 10%, rgba(30,64,175,.14), transparent 60%),
                      radial-gradient(1000px 800px at 90% 20%, rgba(245,158,11,.10), transparent 50%),
                      radial-gradient(900px 900px at 50% 90%, rgba(37,99,235,.12), transparent 55%);
          background-repeat: no-repeat;
          animation: floatBg 18s ease-in-out infinite alternate;
          filter: saturate(1.0);
        }
        .sticky-head { position: sticky; top: 64px; backdrop-filter: blur(6px); }
        .section-title { position: relative; display: inline-flex; align-items: center; }
        .section-title::after {
          content: ""; position: absolute; height: 3px; left: 0; right: 0; bottom: -6px;
          background: linear-gradient(90deg, #2563eb, #f59e0b);
          transform-origin: left; transform: scaleX(0); transition: transform .4s ease;
        }
        .section-title.active::after { transform: scaleX(1); }
        .brand-tile:hover { transform: translateY(-4px); }
        .btn-accent { background-image: linear-gradient(90deg, #1e3a8a, #2563eb); color: white; }
        .btn-accent:hover { filter: brightness(1.03); }
        
        /* Film strip effect */
        .film-strip {
          position: relative;
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #1e40af 100%);
          box-shadow: 
            0 8px 32px rgba(37, 99, 235, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1);
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

        <div className="pointer-events-none fixed inset-0 -z-10 animated-gradient" />

        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-900 to-blue-600" />
              <span className="font-semibold tracking-tight">
                Seth Jensen
              </span>
            </div>
            <nav className="ml-auto hidden md:flex gap-2">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cx(
                    "px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                    active === item.id
                      ? "text-blue-900 dark:text-amber-300 bg-blue-50 dark:bg-slate-800"
                      : "hover:bg-slate-100/70 dark:hover:bg-slate-800/70",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="ml-2">
              <Button
                variant="secondary"
                className="h-9 w-9 rounded-xl grid place-items-center"
                onClick={() => setDark((d: boolean) => !d)}
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>
          </div>
        </header>

        {/* Blue Film Strip Hero */}
        <div className="relative">
          <div className="film-strip py-16 md:py-20 -mx-4 px-4">
            <div className="max-w-6xl mx-auto">
              <section id="hero" className="scroll-mt-24">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="h-48 w-48 md:h-56 md:w-56 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30">
                      <img
                        src={profileImage}
                        alt="Seth Jensen Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Film perforations */}
                    <div className="absolute -top-4 -bottom-4 -left-8 w-4 bg-blue-800/20 rounded-sm"></div>
                    <div className="absolute -top-4 -bottom-4 -right-8 w-4 bg-blue-800/20 rounded-sm"></div>
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
                    >
                      Turning mid-market and startup customers into long-term success stories.
                    </motion.h1>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                      <Dialog
                        open={connectModalOpen}
                        onOpenChange={setConnectModalOpen}
                      >
                        <DialogTrigger asChild>
                          <Button className="rounded-xl bg-white text-blue-800 hover:bg-blue-50 hover:text-blue-900 px-6 py-3 border border-white/20">
                            Let's connect
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>
                              Let's Connect
                            </DialogTitle>
                            <DialogDescription>
                              Choose how you'd like to get in
                              touch. I'm always happy to connect
                              and discuss opportunities.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex flex-col gap-4 pt-4">
                            <a
                              href="https://www.linkedin.com/in/sethjensencsm/"
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-3 p-4 rounded-xl border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition group"
                              onClick={() =>
                                setConnectModalOpen(false)
                              }
                            >
                              <div className="p-2 rounded-lg bg-blue-600 text-white group-hover:bg-blue-700 transition">
                                <Linkedin className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-slate-900">
                                  LinkedIn
                                </div>
                                <div className="text-sm text-slate-600">
                                  Connect on LinkedIn
                                </div>
                              </div>
                              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition" />
                            </a>

                            <a
                              href="mailto:sethjensen13@outlook.com"
                              className="flex items-center gap-3 p-4 rounded-xl border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition group"
                              onClick={() =>
                                setConnectModalOpen(false)
                              }
                            >
                              <div className="p-2 rounded-lg bg-blue-600 text-white group-hover:bg-blue-700 transition">
                                <Mail className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-slate-900">
                                  Email
                                </div>
                                <div className="text-sm text-slate-600">
                                  sethjensen13@outlook.com
                                </div>
                              </div>
                              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition" />
                            </a>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button
                        onClick={() => scrollTo("experience")}
                        className="rounded-xl bg-white text-blue-800 hover:bg-blue-50 hover:text-blue-900 px-6 py-3 border border-white/20"
                      >
                        View experience
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4">
          {/* Description section below film strip */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                Customer Success leader with 10+ years in SaaS,
                cloud, and AI, driven to help organizations
                realize measurable value from their technology
                investments. I excel at guiding customers
                through complex journeys, often managing 60+
                products in parallel, to ensure adoption,
                retention, and growth. My mission is to turn
                every interaction into a strategic advantage for
                the customer, whether across a broad portfolio
                or within a focused solution set.
              </p>
            </div>
          </section>

          {/* QUICK STATS */}
          <section id="stats" className="scroll-mt-24 pb-12">
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "stats" && "active",
                )}
              >
                Quick Stats
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <StatCard key={i} stat={s} />
              ))}
            </div>
          </section>

          {/* HIGHLIGHTS */}
          <section
            id="highlights"
            className="scroll-mt-24 pb-12"
          >
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "highlights" && "active",
                )}
              >
                Highlights
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((h, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  className="rounded-2xl p-5 bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow"
                >
                  <AnimatedNumber
                    value={h.k}
                    delay={idx * 0.2}
                  />
                  <div className="mt-1 text-sm opacity-95">
                    {h.title}
                  </div>
                  <div className="mt-2 text-xs opacity-90">
                    {h.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CUSTOMER QUOTES - Original quotes only (not user submissions) */}
          <section
            id="customer-quotes"
            className="scroll-mt-24 py-12"
          >
            <div className="sticky-head flex items-center justify-between">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "customer-quotes" && "active",
                )}
              >
                Customer Quotes
              </h2>
              <Button
                variant="outline"
                onClick={() => setCurrentPage("reviews")}
                className="flex items-center gap-2"
              >
                See All Reviews
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6 grid gap-6">
              {customerQuotes.map((quote) => (
                <Card key={quote.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <div className="text-blue-800 dark:text-blue-200 font-semibold text-lg">
                          "
                        </div>
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-slate-700 dark:text-slate-200 leading-relaxed">
                          "{quote.quote}"
                        </blockquote>
                        <cite className="block mt-3 text-sm font-medium text-blue-800 dark:text-blue-200">
                          — {quote.author}
                        </cite>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* MANAGER QUOTES - Original quotes only (not user submissions) */}
          <section
            id="manager-quotes"
            className="scroll-mt-24 py-12"
          >
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "manager-quotes" && "active",
                )}
              >
                Manager Quotes
              </h2>
            </div>
            <div className="mt-6 grid gap-6">
              {managerQuotes.map((quote) => (
                <Card key={quote.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                        <div className="text-amber-800 dark:text-amber-200 font-semibold text-lg">
                          "
                        </div>
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-slate-700 dark:text-slate-200 leading-relaxed">
                          "{quote.quote}"
                        </blockquote>
                        <cite className="block mt-3 text-sm font-medium text-amber-800 dark:text-amber-200">
                          — {quote.author}
                        </cite>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* TEAMMATE QUOTES - Original quotes only (not user submissions) */}
          <section
            id="teammate-quotes"
            className="scroll-mt-24 py-12"
          >
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "teammate-quotes" && "active",
                )}
              >
                Teammate Quotes
              </h2>
            </div>
            <div className="mt-6 grid gap-6">
              {teammateQuotes.map((quote) => (
                <Card key={quote.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <div className="text-green-800 dark:text-green-200 font-semibold text-lg">
                          "
                        </div>
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-slate-700 dark:text-slate-200 leading-relaxed">
                          "{quote.quote}"
                        </blockquote>
                        <cite className="block mt-3 text-sm font-medium text-green-800 dark:text-green-200">
                          — {quote.author}
                        </cite>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* BRANDS */}
          <section id="brands" className="scroll-mt-24 py-12">
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "brands" && "active",
                )}
              >
                Brands I've Managed
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {brands.map((b) => (
                <a
                  key={b.name}
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  className="brand-tile transition will-change-transform"
                >
                  <Card className="h-full hover:border-amber-400/60">
                    <CardContent className="py-6 flex flex-col items-center justify-center gap-3">
                      {b.logo ? (
                        <img
                          src={b.logo}
                          alt={b.name}
                          className="h-16 w-16 object-contain opacity-90 hover:opacity-100 transition"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-xl bg-slate-100 dark:bg-slate-800 grid place-items-center text-sm font-semibold">
                          {b.name
                            .split(" ")
                            .map((w) => w[0])
                            .join("")}
                        </div>
                      )}
                      <div className="text-xs text-center text-slate-700 dark:text-slate-200 line-clamp-2">
                        {b.name}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section
            id="experience"
            className="scroll-mt-24 py-12"
          >
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "experience" && "active",
                )}
              >
                Experience
              </h2>
            </div>
            <div className="mt-6 grid gap-4">
              {experiences && experiences.length > 0 ? (
                experiences.map((e, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.05,
                    }}
                  >
                    <Card className="hover:shadow-md">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex flex-wrap items-center gap-2 justify-between">
                          <span className="font-semibold">
                            {e.company}
                          </span>
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            {e.dates}
                          </span>
                        </CardTitle>
                        <div className="text-sm text-slate-700 dark:text-slate-200">
                          {e.role}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 pb-4">
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                          {e.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="text-center text-slate-500 dark:text-slate-400 py-8">
                  <p>Experience data not available</p>
                  <p className="text-sm mt-2">Debug: experiences array length: {experiences?.length || 'undefined'}</p>
                </div>
              )}
            </div>
          </section>

          {/* AI FOR ALL */}
          <section id="aiforall" className="scroll-mt-24 py-12">
            <div className="sticky-head">
              <div
                className={cx(
                  "section-title",
                  active === "aiforall" && "active",
                )}
              >
                <img
                  src={aiForAllLogo}
                  alt="AI For All"
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            </div>
            <div className="mt-6 grid lg:grid-cols-[1.1fr,1fr] gap-6 items-start">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={aiForAllLogo}
                      alt="AI For All"
                      className="h-10 w-10 object-contain"
                    />
                    <div>
                      <div className="font-semibold">
                        Mission
                      </div>
                      <div className="text-sm text-slate-700 dark:text-slate-200">
                        A LinkedIn series keeping the average
                        worker updated on the next things to
                        know in AI.
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-200 list-disc pl-6">
                    <li>
                      Plain-language updates that cut through
                      hype.
                    </li>
                    <li>Hands-on videos when useful.</li>
                    <li>
                      Curated tools you can actually use at
                      work.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="w-full">
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    Just connected{" "}
                    <a href="https://twitter.com/linear?ref_src=twsrc%5Etfw">
                      @linear
                    </a>{" "}
                    to{" "}
                    <a href="https://twitter.com/GlueAI?ref_src=twsrc%5Etfw">
                      @GlueAI
                    </a>{" "}
                    in under 2 minutes using MCP servers. No
                    coding. Just a name, URL, and copy/paste.
                    MCP is becoming the standard for AI-tool
                    connections, and platforms like Glue are
                    making it ridiculously simple for any
                    business user.{" "}
                    <a href="https://twitter.com/hashtag/MCP?src=hash&amp;ref_src=twsrc%5Etfw">
                      #MCP
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/AIForAll?src=hash&amp;ref_src=twsrc%5Etfw">
                      #AIForAll
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">
                      #AI
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/GlueAI?src=hash&amp;ref_src=twsrc%5Etfw">
                      #GlueAI
                    </a>{" "}
                    <a href="https://t.co/phYdk7dY21">
                      pic.twitter.com/phYdk7dY21
                    </a>
                  </p>
                  &mdash; AI For All (@AIForALL27){" "}
                  <a href="https://twitter.com/AIForALL27/status/1953478502214226315?ref_src=twsrc%5Etfw">
                    August 7, 2025
                  </a>
                </blockquote>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section
            id="certifications"
            className="scroll-mt-24 py-12"
          >
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "certifications" && "active",
                )}
              >
                Certifications
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  className="rounded-2xl p-5 bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow hover:shadow-lg transition-shadow flex flex-col min-h-[160px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={cert.logo}
                      alt={`${cert.provider} logo`}
                      className={
                        cert.provider === "ITIL"
                          ? "h-8 w-auto object-contain"
                          : "h-8 w-8 object-contain bg-white rounded p-1"
                      }
                    />
                    <div className="text-xl font-extrabold leading-none">
                      {cert.code}
                    </div>
                  </div>
                  <div className="text-sm opacity-95 font-medium flex-1">
                    {cert.title}
                  </div>
                  <div className="mt-2 text-xs opacity-90">
                    {cert.provider}
                  </div>
                  <div className="mt-3 h-[28px] flex items-start">
                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-medium transition-colors"
                      >
                        Verify Credential
                      </a>
                    ) : (
                      <div className="h-[28px]"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* LEAVE REVIEW */}
          <section
            id="leave-review"
            className="scroll-mt-24 py-12"
          >
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "leave-review" && "active",
                )}
              >
                Leave Review
              </h2>
            </div>
            <div className="mt-6 max-w-2xl mx-auto">
              <LeaveReviewForm
                onSubmit={handleReviewSubmission}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-24 py-12">
            <div className="sticky-head">
              <h2
                className={cx(
                  "section-title text-xl md:text-2xl font-bold",
                  active === "contact" && "active",
                )}
              >
                Contact
              </h2>
            </div>
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="text-lg font-semibold">
                  Let's talk about your customers.
                </div>
                <p className="text-slate-700 dark:text-slate-200 mt-1">
                  I'm happy to share playbooks or jump into a
                  problem with you.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="mailto:sethjensen13@outlook.com"
                    className="btn-accent px-4 py-2 rounded-xl text-sm font-medium"
                  >
                    <span className="inline-flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sethjensencsm/"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-blue-300 dark:border-slate-600 text-blue-800 dark:text-blue-200 hover:border-amber-400 hover:text-amber-600 px-4 py-2 rounded-xl text-sm font-medium"
                  >
                    <span className="inline-flex items-center">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>

          <footer className="py-10 text-center text-sm text-slate-600 dark:text-slate-400">
            © {year} Seth Jensen — Built with React, Tailwind,
            and a little ✨
          </footer>
        </main>
      </div>
    </>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) =>
        entries.forEach(
          (e: IntersectionObserverEntry) => e.isIntersecting && setActive(e.target.id),
        ),
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.2, 0.5, 1],
      },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}