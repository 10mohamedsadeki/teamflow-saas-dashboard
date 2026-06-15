import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@clerk/react";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useAuth();
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 via-white to-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-bold text-white">
              T
            </div>
            <span className="text-lg font-bold text-zinc-900">TeamFlow</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              Features
            </a>

            <a
              href="#reviews"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              Reviews
            </a>

            {isSignedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="rounded-2xl border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
                >
                  Sign In
                </Link>

                <Link
                  to={isSignedIn ? "/dashboard" : "/sign-up"}
                  className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-2xl border border-zinc-200 p-2 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {isOpen && (
          <div className="border-t border-zinc-200 bg-white md:hidden">
            <div className="flex flex-col gap-3 px-5 py-5">
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
                Features
              </a>

              <a
                href="#reviews"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
                Reviews
              </a>

              {isSignedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="rounded-2xl border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-in"
                    className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
                  >
                    Sign In
                  </Link>

                  <Link
                    to={isSignedIn ? "/dashboard" : "/sign-up"}
                    className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>
      <main>
        <section className="overflow-hidden px-5 pb-20 pt-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="mb-5 inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
                🚀 Manage projects smarter with TeamFlow
              </div>
              <h1 className="text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
                Manage Projects
                <span className="block">Without The Chaos</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-500 lg:mx-0">
                TeamFlow helps teams organize projects, manage tasks, track
                deadlines and stay productive — all in one modern workspace.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to={isSignedIn ? "/dashboard" : "/sign-up"}
                  className="rounded-[1.4rem] bg-zinc-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Get Started
                </Link>

                <button className="rounded-[1.4rem] border border-zinc-200 bg-white px-7 py-4 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100">
                  Live Demo
                </button>
              </div>
              <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">10K+</h3>
                  <p className="text-sm text-zinc-500">Tasks Managed</p>
                </div>

                <div className="h-10 w-px bg-zinc-200" />

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">500+</h3>
                  <p className="text-sm text-zinc-500">Teams</p>
                </div>

                <div className="h-10 w-px bg-zinc-200" />

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">99%</h3>
                  <p className="text-sm text-zinc-500">Productivity</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-20"
            >
              <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-zinc-200 blur-[100px]" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-4 shadow-[0_50px_100px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2">
                <img
                  src="/dashboard-preview.png"
                  alt="TeamFlow Dashboard"
                  className="rounded-[2rem]"
                />
              </div>
              <div className="absolute -left-5 top-10 rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-lg">
                <p className="text-sm text-zinc-500">Completed Tasks</p>

                <h3 className="mt-1 text-2xl font-bold text-zinc-900">+18%</h3>
              </div>
              <div className="absolute -bottom-5 right-0 rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-lg">
                <p className="text-sm text-zinc-500">Active Members</p>

                <h3 className="mt-1 text-2xl font-bold text-zinc-900">24</h3>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="px-5 py-10">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Trusted by productive teams
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-10 text-xl font-bold text-zinc-300">
              <span>Notion</span>
              <span>Slack</span>
              <span>Stripe</span>
              <span>Linear</span>
              <span>Framer</span>
            </div>
          </div>
        </section>
        <section id="features" className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700">
                Features
              </span>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
                Everything you need to stay productive
              </h2>

              <p className="mt-5 text-lg text-zinc-500">
                Manage projects, collaborate with your team, track deadlines and
                stay organized in one workspace.
              </p>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="group rounded-[2rem] border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-zinc-100 text-2xl">
                  📁
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900">
                  Project Management
                </h3>
                <p className="mt-3 leading-7 text-zinc-500">
                  Create and manage projects with deadlines, priorities and
                  progress tracking.
                </p>
              </div>
              <div className="group rounded-[2rem] border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-zinc-100 text-2xl">
                  ✅
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900">
                  Task Tracking
                </h3>
                <p className="mt-3 leading-7 text-zinc-500">
                  Organize daily tasks, set priorities and monitor progress
                  efficiently.
                </p>
              </div>
              <div className="group rounded-[2rem] border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-zinc-100 text-2xl">
                  👥
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900">
                  Team Collaboration
                </h3>
                <p className="mt-3 leading-7 text-zinc-500">
                  Work better with your team and keep everyone aligned in one
                  place.
                </p>
              </div>
              <div className="group rounded-[2rem] border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-zinc-100 text-2xl">
                  📅
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900">
                  Calendar Deadlines
                </h3>
                <p className="mt-3 leading-7 text-zinc-500">
                  Stay ahead with deadlines and never miss important project
                  milestones.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700">
                Testimonials
              </span>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
                Loved by productive teams
              </h2>

              <p className="mt-5 text-lg text-zinc-500">
                Teams use TeamFlow to stay organized, collaborate better and
                deliver faster.
              </p>
            </div>
            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex gap-1 text-lg">⭐⭐⭐⭐⭐</div>

                <p className="leading-8 text-zinc-600">
                  “TeamFlow completely changed the way we manage projects.
                  Everything feels cleaner and more organized.”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt="avatar"
                    className="h-14 w-14 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold text-zinc-900">
                      Sarah Johnson
                    </h4>

                    <p className="text-sm text-zinc-500">Product Manager</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex gap-1 text-lg">⭐⭐⭐⭐⭐</div>

                <p className="leading-8 text-zinc-600">
                  “The dashboard is incredibly clean. Managing tasks and
                  deadlines became way easier for our team.”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100?img=14"
                    alt="avatar"
                    className="h-14 w-14 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold text-zinc-900">David Brown</h4>

                    <p className="text-sm text-zinc-500">Team Lead</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex gap-1 text-lg">⭐⭐⭐⭐⭐</div>

                <p className="leading-8 text-zinc-600">
                  “Simple, modern and productive. TeamFlow helped us stay
                  focused and meet deadlines consistently.”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100?img=50"
                    alt="avatar"
                    className="h-14 w-14 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold text-zinc-900">Emma Wilson</h4>

                    <p className="text-sm text-zinc-500">Startup Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
              <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-zinc-700 blur-[120px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-zinc-200">
                  Ready to start?
                </span>

                <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Simplify your workflow with TeamFlow
                </h2>

                <p className="mt-6 text-lg leading-8 text-zinc-300">
                  Join teams that manage projects, tasks and deadlines in one
                  clean and modern workspace.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    to={isSignedIn ? "/dashboard" : "/sign-up"}
                    className="rounded-[1.5rem] bg-white px-7 py-4 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                  >
                   {isSignedIn ? "Go to Dashboard" : "Get Started Free"}
                  </Link>

                  <button className="rounded-[1.5rem] border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/20">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-200 bg-white px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 font-bold text-white">
                  T
                </div>

                <h2 className="text-xl font-bold text-zinc-900">TeamFlow</h2>
              </div>

              <p className="mt-5 max-w-sm leading-7 text-zinc-500">
                Modern workspace for teams to manage projects, tasks and
                deadlines in one clean and productive platform.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-zinc-900">Product</h3>

              <div className="mt-5 flex flex-col gap-4 text-sm text-zinc-500">
                <a href="#features" className="transition hover:text-zinc-900">
                  Features
                </a>

                <a href="#reviews" className="transition hover:text-zinc-900">
                  Reviews
                </a>

                <Link to="/login" className="transition hover:text-zinc-900">
                  Dashboard
                </Link>
              </div>
            </div>

         
            <div>
              <h3 className="font-semibold text-zinc-900">Company</h3>

              <div className="mt-5 flex flex-col gap-4 text-sm text-zinc-500">
                <a href="#" className="transition hover:text-zinc-900">
                  About
                </a>

                <a href="#" className="transition hover:text-zinc-900">
                  Careers
                </a>

                <a href="#" className="transition hover:text-zinc-900">
                  Contact
                </a>
              </div>
            </div>

           
            <div>
              <h3 className="font-semibold text-zinc-900">Start Today</h3>

              <p className="mt-5 text-sm leading-7 text-zinc-500">
                Start organizing your team and projects today.
              </p>

              <Link
               to={isSignedIn ? "/dashboard" : "/sign-up"}
                className="mt-5 inline-flex rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Get Started
              </Link>
            </div>
          </div>

          
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 sm:flex-row">
            <p>© 2026 TeamFlow. All rights reserved.(Mohamed Sadeki)</p>

            <div className="flex gap-5">
              <a href="#" className="transition hover:text-zinc-900">
                Privacy
              </a>

              <a href="#" className="transition hover:text-zinc-900">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
