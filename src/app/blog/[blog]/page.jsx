import Button from "@/components/button"
import Image from 'next/image'

// Sample post data
const post = {
  title: "Why it's important for startups to consider intellectual property early",
  content: `
    <p>Intellectual property (IP) is one of the most valuable assets for any startup, yet it's often overlooked in the early stages of business development. This oversight can lead to significant problems down the line, potentially affecting your company's valuation, competitive advantage, and ability to protect your innovations.</p>
    <h2>Understanding Different Types of IP Protection</h2>
    <p>There are several types of intellectual property protection available to startups:</p>
    <ul>
      <li>Patents: Protect new inventions and technological innovations</li>
      <li>Trademarks: Protect your brand identity, including logos and company names</li>
      <li>Copyrights: Protect original creative works</li>
      <li>Trade secrets: Protect confidential business information</li>
    </ul>
    <p>Each type of protection serves a different purpose and requires different strategies for implementation and maintenance.</p>
    <h2>Common IP Mistakes Startups Make</h2>
    <p>Many startups make critical IP mistakes early on that can be costly to fix later:</p>
    <ul>
      <li>Waiting too long to file for protection</li>
      <li>Not conducting proper IP searches</li>
      <li>Failing to secure IP rights from founders and employees</li>
      <li>Disclosing innovations without proper protection</li>
    </ul>
  `,
  author: {
    name: "Emily Zhang",
    avatar: "/placeholder.svg",
    role: "Intellectual Property Attorney"
  },
  publishedAt: "Feb 20, 2024",
  readTime: "5 min read",
  category: "Intellectual Property",
  image: "https://cdn.usegalileo.ai/stability/6a8f0a48-88b1-4f86-9b31-44cd49b29b86.png"
}

const comments = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg"
    },
    content: "This is a great overview of IP protection. I particularly appreciated the section about common mistakes startups make. We definitely made some of these in our early days!",
    timestamp: "2 hours ago",
    likes: 5,
    replies: [
      {
        id: 2,
        author: {
          name: "Emily Zhang",
          avatar: "/placeholder.svg"
        },
        content: "Thank you, Sarah! Yes, these mistakes are very common. I'm glad you found the article helpful!",
        timestamp: "1 hour ago",
        likes: 2,
        replies: []
      }
    ]
  },
  {
    id: 3,
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg"
    },
    content: "Would love to see a follow-up article about international IP protection strategies. That's becoming increasingly important for startups.",
    timestamp: "3 hours ago",
    likes: 8,
    replies: []
  }
]

const CommentComponent = ({ comment, isReply = false }) => (
  <div className={`flex gap-4 ${isReply ? 'ml-12 mt-4' : 'mt-6'}`}>
    {/* <Avatar className="h-10 w-10">
      <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
      <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
    </Avatar> */}
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <span className="font-semibold">{comment.author.name}</span>
        <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
      </div>
      <p className="mt-1 text-sm">{comment.content}</p>
      <div className="mt-2 flex gap-4">
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          {/* <ThumbsUp className="h-4 w-4" /> */}
          <Image src="/thumbs-up.svg" width={16} height={16} alt="Thumbs up" />
          {comment.likes}
        </button>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          {/* <MessageSquare className="h-4 w-4" /> */}
          <Image src="/chat-bubble.svg" width={16} height={16} alt="Chat bubble" />
          Reply
        </button>
      </div>
      {comment.replies.map(reply => (
        <CommentComponent key={reply.id} comment={reply} isReply />
      ))}
    </div>
  </div>
)

export default function BlogPostDetail() {
  const handleSubmitComment = async (formData) => {
    'use server';
    const comment = formData.get('comment')
    console.log('comment', comment)
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm">
                {post.category}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-[#141414]">
              {post.title}
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {/* <Avatar className="h-10 w-10">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar> */}
                <div>
                  <div className="font-semibold">
                    <p>
                      {post.author.name}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>
                      {post.author.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Image src="/calendar.svg" width={16} height={16} alt="Calendar" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <Image src="/clock.svg" width={16} height={16} alt="Clock" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8 aspect-[16/9] overflow-hidden rounded-xl">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="my-8">
            <Button variant="outline" className="gap-2">
              {/* <Share2 className="h-4 w-4" /> */}
              <Image src="/share.svg" width={16} height={16} alt="Share" />
              Share Article
            </Button>
          </div>

          {/* <Separator className="my-8" /> */}

          {/* Comments Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Comments</h2>

            {/* Comment Form */}
            <div className="border border-neutral-200 rounded-lg p-6 mb-8">
              {/* <CardHeader> */}
                <div className="mb-6">
                  <h3 className="font-bold text-2xl">Leave a comment</h3>
                  <p>Share your thoughts on this article</p>
                </div>
              {/* </CardHeader> */}
                <form action={handleSubmitComment} >
                  <textarea
                    name="comment"
                    placeholder="Write your comment..."
                    // value={newComment}
                    // onChange={(e) => setNewComment(e.target.value)}
                    className="border border-neutral-200 rounded-lg p-6 mb-4 block w-full"
                  />
                  <Button type="submit">Submit Comment</Button>
                </form>
            </div>

            {/* Comments List */}
            <div className="mt-8">
              {comments.map(comment => (
                <CommentComponent key={comment.id} comment={comment} />
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}