import { NavbarLinkComponentProps } from "@/components/SidebarComponent/NavbarLinkComponent";
import { BsFileRichtextFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { MdEditDocument, MdOutlinePostAdd } from "react-icons/md";
import { RiSeoFill } from "react-icons/ri";
export const sidebarList: NavbarLinkComponentProps[] = [
  {
    link: "dashboard",
    title: "Trang chủ",
    icon: FaHome,
  },
  // {
  //   link: "content-management",
  //   title: "Quản lý nội dung",
  //   icon: FaFolderOpen,
  // },
  {
    link: "ai-writer",
    title: "AI Writer",
    icon: BsFileRichtextFill,
  },
  {
    link: "ai-seo",
    title: "AI SEO",
    icon: RiSeoFill,
  },
  {
    link: "ai-blog",
    title: "AI Blog",
    icon: ImBlog,
  },
  // {
  //   link: "ai-chat",
  //   title: "AI Chat",
  //   icon: MdMarkUnreadChatAlt,
  // },
  // {
  //   link: "ai-vision",
  //   title: "AI Vision",
  //   icon: GiBullseye,
  // },
  // {
  //   link: "ai-chat-image",
  //   title: "AI Chat Image",
  //   icon: IoImage,
  // },
  // {
  //   link: "ai-pdf-chat",
  //   title: "AI PDF Chat",
  //   icon: FaFilePdf,
  // },
  {
    link: "ai-rewriter",
    title: "AI Rewriter",
    icon: MdEditDocument,
  },
  {
    link: "generate-article",
    title: "Generate Article",
    icon: MdOutlinePostAdd,
  },
  // {
  //   link: "speech-to-text",
  //   title: "Speech To Text",
  //   icon: PiSpeakerHighFill,
  // },
  // {
  //   link: "ai-plagiarism",
  //   title: "AI Plagiarism",
  //   icon: RiMenuSearchFill,
  // },
  // {
  //   link: "/ai-detector",
  //   title: "AI Detector",
  //   icon: PiDetectiveFill,
  // },
];
