import IconC from '../components/IconC';
import IconClojure from '../components/IconClojure';
import IconCoffeeScript from '../components/IconCoffeeScript';
import IconCPlusPlus from '../components/IconCPlusPlus';
import IconCSharp from '../components/IconCSharp';
import IconCSS from '../components/IconCSS';
import IconDart from '../components/IconDart';
import IconElixir from '../components/IconElixir';
import IconElm from '../components/IconElm';
import IconErlang from '../components/IconErlang';
import IconFSharp from '../components/IconFSharp';
import IconGo from '../components/IconGo';
import IconGroovy from '../components/IconGroovy';
import IconHaskell from '../components/IconHaskell';
import IconHTML from '../components/IconHTML';
import IconJava from '../components/IconJava';
import IconJavaScript from '../components/IconJavaScript';
import IconJulia from '../components/IconJulia';
import IconKotlin from '../components/IconKotlin';
import IconLua from '../components/IconLua';
import IconMarkdown from '../components/IconMarkdown';
import IconMATLAB from '../components/IconMATLAB';
import IconNix from '../components/IconNix';
import IconObjectiveC from '../components/IconObjectiveC';
import IconOCaml from '../components/IconOCaml';
import IconPerl from '../components/IconPerl';
import IconPHP from '../components/IconPHP';
import IconPython from '../components/IconPython';
import IconR from '../components/IconR';
import IconRuby from '../components/IconRuby';
import IconRust from '../components/IconRust';
import IconScala from '../components/IconScala';
import IconSCSS from '../components/IconSCSS';
import IconShell from '../components/IconShell';
import IconStylus from '../components/IconStylus';
import IconSwift from '../components/IconSwift';
import IconTypeScript from '../components/IconTypeScript';
import IconVimScript from '../components/IconVimScript';
import { GithubLanguageKind } from '../enums/github-language-kind.enum';

// TODO: Publish as npm library (github-lang-to-icon repo)
export const getGithubLanguageIcon = (githubLanguageKind: GithubLanguageKind, size: number) => {
  const map: Record<GithubLanguageKind, React.ReactNode> = {
    [GithubLanguageKind.C]: <IconC size={size} />,
    [GithubLanguageKind.Clojure]: <IconClojure size={size} />,
    [GithubLanguageKind.CoffeeScript]: <IconCoffeeScript size={size} />,
    [GithubLanguageKind.CPlusPlus]: <IconCPlusPlus size={size} />,
    [GithubLanguageKind.CSharp]: <IconCSharp size={size} />,
    [GithubLanguageKind.CSS]: <IconCSS size={size} />,
    [GithubLanguageKind.Dart]: <IconDart size={size} />,
    [GithubLanguageKind.Elixir]: <IconElixir size={size} />,
    [GithubLanguageKind.Elm]: <IconElm size={size} />,
    [GithubLanguageKind.Erlang]: <IconErlang size={size} />,
    [GithubLanguageKind.FSharp]: <IconFSharp size={size} />,
    [GithubLanguageKind.Go]: <IconGo size={size} />,
    [GithubLanguageKind.Groovy]: <IconGroovy size={size} />,
    [GithubLanguageKind.Haskell]: <IconHaskell size={size} />,
    [GithubLanguageKind.HTML]: <IconHTML size={size} />,
    [GithubLanguageKind.Java]: <IconJava size={size} />,
    [GithubLanguageKind.JavaScript]: <IconJavaScript size={size} />,
    [GithubLanguageKind.Julia]: <IconJulia size={size} />,
    [GithubLanguageKind.Kotlin]: <IconKotlin size={size} />,
    [GithubLanguageKind.Lua]: <IconLua size={size} />,
    [GithubLanguageKind.Markdown]: <IconMarkdown size={size} />,
    [GithubLanguageKind.MATLAB]: <IconMATLAB size={size} />,
    [GithubLanguageKind.Nix]: <IconNix size={size} />,
    [GithubLanguageKind.ObjectiveC]: <IconObjectiveC size={size} />,
    [GithubLanguageKind.OCaml]: <IconOCaml size={size} />,
    [GithubLanguageKind.Perl]: <IconPerl size={size} />,
    [GithubLanguageKind.PHP]: <IconPHP size={size} />,
    [GithubLanguageKind.Python]: <IconPython size={size} />,
    [GithubLanguageKind.R]: <IconR size={size} />,
    [GithubLanguageKind.Ruby]: <IconRuby size={size} />,
    [GithubLanguageKind.Rust]: <IconRust size={size} />,
    [GithubLanguageKind.Scala]: <IconScala size={size} />,
    [GithubLanguageKind.SCSS]: <IconSCSS size={size} />,
    [GithubLanguageKind.Shell]: <IconShell size={size} />,
    [GithubLanguageKind.Stylus]: <IconStylus size={size} />,
    [GithubLanguageKind.Swift]: <IconSwift size={size} />,
    [GithubLanguageKind.TypeScript]: <IconTypeScript size={size} />,
    [GithubLanguageKind.VimScript]: <IconVimScript size={size} />,
  };

  return map[githubLanguageKind];
};
